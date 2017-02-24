@tracks.each_with_index do |track, idx|
  json.set! track.id do
    json.partial! 'track', track: track
    json.temp_queue_pos idx
  end
end
