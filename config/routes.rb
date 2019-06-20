Rails.application.routes.draw do
  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions'
  }
  devise_scope :user do
    get "sign_in", :to => "users/sessions#new"
    get '/users/sign_out', :to => 'devise/sessions#destroy'
  end

  root 'images#index'

  resources :images, except: :show do

    collection do
      get :search
    end

    resources :comments, only: [:new, :create]
    resources :favorites, only: [:create, :destroy]

  end

  resources :users, only: :show do
    resources :favorites, only: :index
    resources :mypages, only: :index
  end

end
