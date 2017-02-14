class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      render "api/users/show"
    else
      render json: { base: ["Email/password do not match"] }, status: 422
    end
  end

  def destroy
    @user = current_user
    log_out!
    render "api/users/show"
  end
end
