class ApplicationController < Sinatra::Base

    set :default_content_type, 'application/json'

    get '/products' do
        product = Product.all
        product.to_json
    end

    get '/products/:id' do
        product = Product.find(params[:id])
        product.to_json(include: :reviews)
    end

    # Post and Patch 
    #create
    post '/products/:id' do
       product = Product.create(
        name: params[:name], description: params[:description])
         product.to_json
    end

    #update
    patch '/products/:id' do
        product.update(params[:id], 
       description: params[:description])
       product.to_json
    end

    #---REVIEWS--#
    get '/reviews' do
        reviews = Review.all
        reviews.to_json
    end

    # create reviews
    post '/reviews' do
        reviews = Review.create(
          )
          reviews.to_json
    end

    #delete reviews
    delete "/reviews/:id" do 
        reviews = Review.find(params[:id])
        reviews.destroy
        reviews.to_json
    end


    #--USERS--#

    get '/users' do
        user = User.all
        user.to_json
    end

    post '/users' do 
        user = User.create( 
            name: params[:name],
            contact: params[:contact],
            email: params[:email])
        user.to_json
    end

    # t.string "name"
    # t.string "contact"
    # t.string "email"

end