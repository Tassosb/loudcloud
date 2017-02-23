class Api::TracksController < ApplicationController
  before_action :require_login!, only: [:update, :create, :destroy, :like, :unlike]

  def index
    if (params[:artist_id])
      @tracks = Track.where(artist_id: params[:artist_id])
                     .includes(:likes, :comments, artist: [:tracks])
    elsif params[:top_ten]
      @tracks = Track.order(num_plays: :desc)
                     .limit(10)
                     .includes(:likes, :comments, artist: [:tracks])
    else
      @tracks = Track.order(created_at: :desc)
                     .limit(10)
                     .includes(:likes, :comments, artist: [:tracks])
    end
  end

  def update
    @track = Track.includes(comments: [:author]).find_by(id: params[:id])

    if @track.update(track_params)
      render :show
    else
      render json: @track.errors, status: 422
    end
  end

  def show
    @track = Track.includes(:likes, :artist, comments: [:author]).find_by(id: params[:id])
  end

  def create
    @track = current_user.tracks.new(track_params);

    if @track.save
      render :show
    else
      render json: @track.errors, status: 422
    end
  end

  def destroy
    @track = Track.find_by(id: params[:id])

    if @track
      @track.destroy
    end

    render json: {}, status: 200
  end

  def like
    @track = Track.includes(:likes, :artist, comments: [:author]).find_by(id: params[:id])
    @track.likes.create(user_id: params[:user_id])

    render :show
  end

  def unlike
    @track = Track.includes(:likes, :artist, comments: [:author]).find_by(id: params[:id])
    @track.likes.find_by(user_id: params[:user_id]).destroy

    render :show
  end

  private
  def track_params
    params.require(:track).permit(:title, :num_plays, :audio, :credits, :image)
  end
end
