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

  validates :title, :artist, :num_plays, :waveform, presence: true

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

  before_validation :extract_metadata

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

  ###From EricMoy Songcloud
  def extract_metadata
    return unless (self.waveform.empty? || self.duration.zero?)
    path = audio.queued_for_write[:original] &&
           audio.queued_for_write[:original].path ||
           audio.url

    open(path) do |url_file|
      io_command = "php lib/assets/php-waveform-json.php #{url_file.path}"
      IO.popen(io_command) do |io|
        self.waveform = JSON.parse(io.read)['left']
      end

      open_opts = { :encoding => 'utf-8' }
      Mp3Info.open(url_file.path, open_opts) do |mp3info|
        self.duration = mp3info.length.to_i
      end
    end
  end
end
