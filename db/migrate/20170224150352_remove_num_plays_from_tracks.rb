class RemoveNumPlaysFromTracks < ActiveRecord::Migration
  def change
    remove_column :tracks, :num_plays
  end
end
