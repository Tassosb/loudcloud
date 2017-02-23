class AddTrackTimeToComments < ActiveRecord::Migration
  def change
    add_column :comments, :track_time, :integer, null: false, default: 0
  end
end
