class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all.includes(:artist)
    
    if (params[:artist_id])
      @tracks = @tracks.where(artist_id: params[:artist_id])
    end
  end


end
