json.extract! user, :id, :name, :email, :location#, :total_plays
json.image_url asset_path(user.image.url(:original))
