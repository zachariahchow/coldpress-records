Rails.application.routes.draw do
  get 'albums/index'
  get 'albums/show'
  get 'artists', to: 'artist#index'
  get 'artists/:id', to: 'artist#show'
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end