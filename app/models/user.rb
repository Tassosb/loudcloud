# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string           not null
#  password_digest    :string           not null
#  name               :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  location           :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :password_digest, :name, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :image, default_url: "default_image.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :sessions
  has_many :tracks,
    foreign_key: :artist_id
  has_many :likes
  has_many :liked_tracks, through: :likes, source: :track
  has_many :authored_comments,
    class_name: 'Comment',
    foreign_key: :author_id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def total_plays
    self.tracks.sum(:num_plays)
  end

  def add_session!(http_user_agent)
    new_session = Session.generate_session(self, http_user_agent)
    new_session.token
  end

  def remove_session!(token)
    session = Session.find_by(token: token, user_id: self.id)
    session.destroy!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def session_tokens
    sessions.map(&:token)
  end
end
