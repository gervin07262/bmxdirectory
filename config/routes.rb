Rails.application.routes.draw do
  devise_for :users
  resources :circuits
  resources :posts
  resources :shops
  get '/', to: 'site#index'
  get '/noticias', to: 'site#posts'
  get '/noticias/:id', to: 'site#post_detail'
  get '/tiendas', to: 'site#shops'
  get '/eventos', to: 'site#events'
  get '/circuits-all', to: 'site#get_circuits'
  post '/circuits-filter', to: 'site#get_circuits_filter'
  get '/shops-all', to: 'site#get_shops'
  post '/shops-filter', to: 'site#get_shops_filter'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
