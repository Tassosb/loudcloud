json.extract! user, :id, :name, :email, :location
json.image_url asset_path(user.image.url(:original))
