class AddUniqueConstraintToLikes < ActiveRecord::Migration
  def change
    add_index :likes, [:user_id, :track_id], unique: true
  end
end
