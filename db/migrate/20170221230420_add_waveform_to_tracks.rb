class AddWaveformToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :waveform, :float, array: true, default: [], null: false
  end
end
