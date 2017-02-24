class CreatePlays < ActiveRecord::Migration
  def change
    create_table :plays do |t|
      t.integer :user_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
  end
end
