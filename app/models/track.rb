class Track < ActiveRecord::Base
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
      'audio/x-mpegaudio' ]

  has_attached_file :image, default_url: "default_image.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :artist,
    class_name: 'User',
    foreign_key: :artist_id

  has_many :likes
  has_many :likers, through: :likes, source: :user

  def num_likes
    self.likes.count
  end
end
