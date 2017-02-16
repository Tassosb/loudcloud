class RemoveAudioAttachment < ActiveRecord::Migration
  def change
    remove_attachment :tracks, :audio
  end
end
