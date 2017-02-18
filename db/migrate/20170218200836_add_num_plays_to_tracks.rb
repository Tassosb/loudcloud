class AddNumPlaysToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :num_plays, :integer, default: 0
  end
end
