class RemoveImageUrl < ActiveRecord::Migration
  def change
    remove_column :users, :image_url
  end
end
