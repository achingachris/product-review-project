class ApplicationController < Sinatra::Base
    set :default_content_type, "application/json"

    get '/products' do
        product = Product.all
        product.to_json(include: :reviews)
      end

      get '/products/:id' do
        product = Product.find(params[:id])
        product.to_json
      end

      get '/products/:id' do
        product = Product.find(params[:id])
        product.to_json(include: :reviews)
      end 
  

end