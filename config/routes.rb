Rails.application.routes.draw do
  get 'songs', to: 'songs#index'
  get 'songs/:id', to: 'songs#show'
  get 'albums', to: 'albums#index'
  get 'albums/:id', to: 'albums#show'
  get 'artists', to: 'artist#index'
  get 'artists/:id', to: 'artist#show'
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end