json.extract! track, :id, :title, :credits

json.artist do
  json.partial! 'api/users/user', user: track.artist
end
