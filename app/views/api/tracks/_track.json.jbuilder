json.extract! track, :id, :title, :credits, :num_plays
json.audio_url asset_path(track.audio.url(:original))

json.artist do
  json.partial! 'api/users/user', user: track.artist
end
