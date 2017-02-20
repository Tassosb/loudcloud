# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  track_id   :integer          not null
#

class Comment < ActiveRecord::Base
  validates :body, :author, :track, presence: true

  belongs_to :track
  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id
end
