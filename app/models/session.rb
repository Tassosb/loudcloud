class Session < ActiveRecord::Base
  validates :user, :token, :http_user_agent, presence: true

  belongs_to :user

  def self.generate_session(user, http_user_agent)
    new_token = SecureRandom::urlsafe_base64(16)
    new_session = self.create!(
      token: new_token,
      user_id: user.id,
      http_user_agent: http_user_agent)
  end
end
