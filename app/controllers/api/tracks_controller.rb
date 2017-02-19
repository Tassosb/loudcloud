class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all.includes(:artist).order(created_at: :desc).limit(5)

    if (params[:artist_id])
      @tracks = @tracks.where(artist_id: params[:artist_id])
    end
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

  private
  def track_params
    params.require(:track).permit(:title, :num_plays, :audio, :credits, :image)
  end
end
