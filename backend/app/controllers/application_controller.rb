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
  
      post '/products' do
        product = Product.create(
          product_name: params[:product_name],
          description: params[:description],
          manufacturer: params[:manufacturer],
          product_image: params[:product_image]
        )
        mechanic.to_json
      end

      patch '/products/:id' do
        product = Product.find(params[:id])
        product.update(
          product_name: params[:product_name],
          description: params[:description],
          manufacturer: params[:manufacturer],
          product_image: params[:product_image]
        )
        product.to_json
      end

      delete '/products/:id' do
        product = Product.find(params[:id])
        product.delete
        product.to_json
      end

      #---REVIEWS---#

      get '/reviews' do
        reviews = Review.all
        reviews.to_json
      end

      get '/reviews/:id' do
        reviews = Review.find(params[:id])
        reviews.to_json
      end


       post '/reviews' do
        review = Review.create(
        comment: params[:comment],
        user_id: params[:user_id],
        product_id: params[:product_id]
      )
       review.to_json
    end

    patch '/reviews/:id' do
        review = Review.find(params[:id])
        review.update(
          comment: params[:comment]
        )
        review.to_json
      end

      delete '/reviews/:id' do
        review = Review.find(params[:id])
        review.delete
        review.to_json
      end

    

    get '/users' do 
        user = User.all 
        user.to_json
    end

    get '/users/:id' do
    user = User.find_by(id: params[:id])
    product_ids = user.reviews.map { |review| review[:product_id] }
    products = Product.all.select { |product| product_ids.include?(product.id) }
    user.to_json
  end

end
