class Play < ActiveRecord::Base
  validates :user_id, :track, presence: true

  belongs_to :user
  belongs_to :track
end
