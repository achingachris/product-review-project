class ApplicationController < Sinatra::Base

    set :default_content_type, 'application/json'

    get '/products' do
        product = Product.all
        product.to_json
    end

    get '/product/:id' do
        product = Product.find(params[:id])
        product.to_json(include: :reviews)
    end

    # Post and Patch 

    post '/product/:id' do
        
    end

end