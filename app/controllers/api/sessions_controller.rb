class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      render "api/users/show"
    else
      render json: { login: ["Email/password do not match"] }, status: 422
    end
  end

  def destroy
    @user = current_user
    log_out!
    render User.new
  end
end
