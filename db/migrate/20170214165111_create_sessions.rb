class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :token, null: false
      t.integer :user_id, null: false, index: true
      t.string :http_user_agent, null: false

      t.timestamps null: false
    end
  end
end
