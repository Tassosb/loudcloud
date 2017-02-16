class Track < ActiveRecord::Base
  validates :title, :artist, presence: true

  belongs_to :artist,
    class_name: 'User',
    foreign_key: :artist_id
end
