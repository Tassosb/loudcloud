Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :destroy, :index, :show, :update] do
      member do
        post :like
        delete :unlike
      end
    end

    resources :comments, only: [:create, :destroy]
    resources :search_results, only: [:index]
  end
end
