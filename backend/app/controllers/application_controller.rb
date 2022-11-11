class ApplicationController < Sinatra::Base
    set :default_content_type, "application/json"

    get '/products' do
        product = Product.all
        product.to_json(include: :reviews)
      end


end