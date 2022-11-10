puts "🌱 Seeding data..."

# place your seeds here


users = [
    {name: 'Timothy Mureithi', contact: 0707000000, email: 'timothy@mail.com'},
    {name: 'Chris Achinga', contact: 0707000000, email: 'chris@mail.com'},
    {name: 'Mary Wairimu', contact: 0707000000, email: 'mary@mail.com'},
    {name: 'Angela Mwaniki', contact: 0707000000, email: 'angela@mail.com'},
    {name: 'Jerry Johns', contact: 0707000000, email: 'jerry@mail.com'}
  ]

products = [
    {product_name: "iPhone 14 Plus 512GB", description: "it is a good product", manufacturer: "Apple", product_image: "https://m.media-amazon.com/images/I/61FZC+6hDFL._AC_SY300_SX300_.jpg"},
    {product_name: "Nokia G11 Plus", description: "it is a good product", manufacturer: "Nokia", product_image: "https://m.media-amazon.com/images/I/51vf1R1wS9L._AC_SL1080_.jpg"},
    {product_name: "Infinix Zero Ultra 5G", description: "it is a good product", manufacturer: "Infinix", product_image: "https://m.media-amazon.com/images/I/41n4NQYMGaL._AC_.jpg"},
    {product_name: "Tecno Spark 9 Pro Sports Edition", description: "it is a good product", manufacturer: "Techno", product_image: "https://m.media-amazon.com/images/I/712nxo9u15L.__AC_SX300_SY300_QL70_FMwebp_.jpg"},
    {product_name: "Samsung Galaxy M23 5G", description: "it is a good product", manufacturer: "Samsung", product_image: "https://m.media-amazon.com/images/I/61nhOdlKpDL._AC_SL1500_.jpg"},
    {product_name: "Oppo Reno 8 4G", description: "it is a good product", manufacturer: "Oppo", product_image: "https://m.media-amazon.com/images/I/51FHswQtVXL.__AC_SY300_SX300_QL70_FMwebp_.jpg"}
  ]
  
  Review.create(comment: "The product is ok", user_id: 4, product_id: 3)

  # Product.create(product_name: "Iphone 13", description: "It's OK", manufacturer:"Apple", product_image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg")

#   t.string :product_name
#   t.string :description
#   t.string :manufacturer
#   t.datetime :date_created
#   t.datetime :updated_at
#   t.string :product_image

  Review.create(comment: "The phone is awesome", user_id: 2, product_id: 1)
  #Review.create(comment: Faker::Lorem, user_id: user.id, product_id: product.id)
  
#   t.string "comment"
#   t.integer "user_id"
#   t.integer "product_id"
#   t.datetime "created_at"
#   t.datetime "updated_at"

   users.each do |u|
    User.create(u)
   end

    products.each do|p|
      Product.create(p)
    end
#   create_table :users do |t|
#     t.string :name 
#     t.string :contact
#     t.string :email

puts "🌱 Done seeding!"
