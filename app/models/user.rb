class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :sessions

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
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
