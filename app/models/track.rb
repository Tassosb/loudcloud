# == Schema Information
#
# Table name: tracks
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  artist_id          :integer          not null
#  credits            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  audio_file_name    :string           not null
#  audio_content_type :string           not null
#  audio_file_size    :integer          not null
#  audio_updated_at   :datetime         not null
#  num_plays          :integer          default(0)
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Track < ActiveRecord::Base
  attr_reader :liked_by_current_user

  validates :title, :artist, :num_plays, presence: true

  has_attached_file :audio
  validates_attachment_content_type :audio,
    :content_type => [
      'audio/mpeg',
      'audio/x-mpeg',
      'audio/mp3',
      'audio/x-mp3',
      'audio/mpeg3',
      'audio/x-mpeg3',
      'audio/mpg',
      'audio/x-mpg',
      'audio/x-mpegaudio',
      'audio/mp4',
      'audio/x-mp4',
      'audio/x-mp4audio'
    ]

  has_attached_file :image, default_url: "default_image.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :artist,
    class_name: 'User',
    foreign_key: :artist_id

  has_many :likes
  has_many :likers, through: :likes, source: :user
  has_many :comments

  def num_likes
    self.likes.count
  end

  def num_comments
    self.comments.count
  end

  def liked_by?(user)
    self.likers.include?(user)
  end
end
