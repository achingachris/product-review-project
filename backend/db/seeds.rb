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
    {product_name: "iPhone 14 Plus 512GB", description: "it is a good product", manufacturer: "Apple", product_image: "https://images.unsplash.com/photo-1638038772924-ef79cce2426d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80.png"},
    {product_name: "Nokia G11 Plus", description: "it is a good product", manufacturer: "Nokia", product_image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80.png"},
    {product_name: "Infinix Zero Ultra 5G", description: "it is a good product", manufacturer: "Infinix", product_image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80.png"},
    {product_name: "Tecno Spark 9 Pro Sports Edition", description: "it is a good product", manufacturer: "Techno", product_image: "https://images.unsplash.com/photo-1548094891-c4ba474efd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=545&q=80.png"},
    {product_name: "Samsung Galaxy M23 5G", description: "it is a good product", manufacturer: "Samsung", product_image: "https://images.unsplash.com/photo-1597762470488-3877b1f538c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80.png"},
    {product_name: "Oppo Reno 8 4G", description: "it is a good product", manufacturer: "Oppo", product_image: "https://images.unsplash.com/photo-1558885544-2defc62e2e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80.png"}
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
