json.extract! comment, :id, :body, :track_time

json.time_ago time_ago_in_words(comment.created_at)
json.time_posted (comment.created_at).strftime("%l:%M")

json.author do
  json.partial! 'api/users/user', user: comment.author
end
