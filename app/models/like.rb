# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  track_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Like < ActiveRecord::Base
  validates :user, :track, presence: true
  validates :user_id, uniqueness: { scope: :track_id }

  belongs_to :user
  belongs_to :track
end
