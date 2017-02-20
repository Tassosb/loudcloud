json.extract! track, :id, :title, :credits, :num_plays, :num_likes
json.audio_url asset_path(track.audio.url(:original))
json.image_url asset_path(track.image.url(:original))

json.liked_by_current_user track.liked_by?(current_user)

json.artist do
  json.partial! 'api/users/user', user: track.artist
end
