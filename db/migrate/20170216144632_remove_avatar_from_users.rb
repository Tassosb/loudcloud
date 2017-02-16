class RemoveAvatarFromUsers < ActiveRecord::Migration
  def change
    remove_attachment :users, :avatar
  end
end
