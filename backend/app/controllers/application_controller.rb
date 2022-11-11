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
  
      #POST

      post '/products' do
        product = Product.create(
          product_name: params[:product_name],
          description: params[:description],
          manufacturer: params[:manufacturer],
          product_image: params[:product_image]
        )
        mechanic.to_json
      end


end