json.extract! track, :id, :title, :credits, :waveform, :duration
json.num_likes track.likes.length
json.num_comments track.comments.length
json.num_plays track.plays.length
json.audio_url asset_path(track.audio.url(:original))
json.image_url asset_path(track.image.url(:original))

json.liked_by_current_user track.liked_by?(current_user)

json.artist do
  json.partial! 'api/users/user', user: track.artist, include_total_plays: false
end
