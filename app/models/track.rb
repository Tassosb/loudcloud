class Track < ActiveRecord::Base
  validates :title, :artist, presence: true

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
      'audio/x-mpegaudio' ]

  belongs_to :artist,
    class_name: 'User',
    foreign_key: :artist_id
end
