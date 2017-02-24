json.partial! "api/tracks/track", track: @track
json.temp_queue_pos 0

json.comments do
  @track.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
