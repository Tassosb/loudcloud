class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all.includes(:artist)

    if (params[:artist_id])
      @tracks = @tracks.where(artist_id: params[:artist_id])
    end

    @tracks = @tracks.sample(5)
  end

  def update
    @track = Track.find_by(id: params[:id])

    if @track.update(track_params)
      render :show
    else
      render json: @track.errors, status: 422
    end
  end

  def show
    @track = Track.find_by(id: params[:id])
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
    @track = Track.find_by(id: params[:id])
    @track.likes.create(user_id: params[:user_id])

    render :show
  end

  def unlike
    @track = Track.find_by(id: params[:id])
    @track.likes.find_by(user_id: params[:user_id]).destroy

    render :show
  end

  private
  def track_params
    params.require(:track).permit(:title, :num_plays, :audio, :credits, :image)
  end
end
