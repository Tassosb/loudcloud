json.partial! "api/users/user", user: @user
json.extract! @user, :total_plays
