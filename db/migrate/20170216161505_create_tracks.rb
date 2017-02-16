class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false, index: true
      t.integer :artist_id, null: false, index: true
      t.string :credits

      t.timestamps null: false
    end
  end
end
