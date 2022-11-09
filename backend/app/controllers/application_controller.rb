class ApplicationController < Sinatra::Base

    set :default_content_type, 'application/json'

    #PRODUCTS
    get '/products' do
        product = Product.all
        product.to_json
    end

    get '/products/:id' do
        product = Product.find(params[:id])
        product.to_json(include: :reviews)
    end

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

    #update reviews
    patch '/reviews/:id' do 
        reviews = Review.find(params[:id])
        reviews.update(
            comment: params[:comment]
            
        )
    end

    # t.string "comment"
    # t.integer "user_id"
    # t.integer "product_id"
    # t.datetime "created_at"
    # t.datetime "updated_at"

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

  
end