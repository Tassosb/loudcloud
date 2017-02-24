class Api::SessionsController < ApplicationController
  before_action :require_login!, only: [:destroy]

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      @include_total_plays = true
      render "api/users/show"
    else
      render json: { login: ["Email/password do not match"] }, status: 422
    end
  end

  def destroy
    @user = current_user
    log_out!
    render json: {}
  end
end
