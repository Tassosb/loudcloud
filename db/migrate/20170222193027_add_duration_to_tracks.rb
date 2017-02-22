class AddDurationToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :duration, :integer, null: false, default: 0
  end
end
