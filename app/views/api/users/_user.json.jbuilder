json.extract! user, :id, :name, :email, :location

if include_total_plays
  json.extract! user, :total_plays
end

json.image_url asset_path(user.image.url(:original))
