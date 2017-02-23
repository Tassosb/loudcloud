class Api::UsersController < ApplicationController
  before_action :require_login!, only: [:create, :update]

  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.includes(:tracks).find_by(id: params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :name, :location, :image)
  end
end
