class AddAttachmentAudioToTracksWithConstraint < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :audio, null: false
    end
  end

  def self.down
    remove_attachment :tracks, :audio
  end
end
