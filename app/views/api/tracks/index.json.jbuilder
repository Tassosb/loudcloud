@tracks.each do |track|
  json.set! track.id do
    json.partial! 'track', track: track
  end
end
