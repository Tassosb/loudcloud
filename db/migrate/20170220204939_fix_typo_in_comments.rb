class FixTypoInComments < ActiveRecord::Migration
  def change
    remove_column :comments, :track_is
    add_column :comments, :track_id, :integer, null: false, index: true
  end
end
