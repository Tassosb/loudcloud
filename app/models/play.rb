class Play < ActiveRecord::Base
  validates :user, :track, presence: true

  belongs_to :user
  belongs_to :track
end
