Backend

SINATRA (RUBY) - Used on the backend for Active Records-based API development.
products, users, and reviews are three models.
ActiveRecord will manage the database.
Sinatra API routes that take care of all CRUD operations for Active Record entities.
 
API ROUTES: 
http://localhost:8000/products
 get '/products' do
        product = Product.all
        product.to_json
    end
 
 
http://localhost:8000/reviews
   get '/reviews' do
        reviews = Review.all
        reviews.to_json
    end
 
 
 
 
http://localhost:8000/users
    get '/users' do
        user = User.all
        user.to_json
    end
 
 
 
REACT FETCH REQUEST
 
fetch("http://localhost:8000/products")
  .then((r) => r.json())
  .then((data) => console.log(data));
