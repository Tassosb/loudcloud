class Api::SearchResultsController < ApplicationController

  def index
    query = params[:query].downcase
    @search_results = User.where("LOWER(name) LIKE ?", "%#{query}%").limit(5);
    @search_results += Track.where("LOWER(title) LIKE ?", "%#{query}%").limit(5)
  end
end
