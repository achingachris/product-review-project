puts "🌱 Seeding data..."

# place your seeds here


users = [
    {name: 'Timothy Mureithi', contact: 0707000000, email: 'timothy@mail.com'},
    {name: 'Chris Achinga', contact: 0707000000, email: 'chris@mail.com'},
    {name: 'Mary Wairimu', contact: 0707000000, email: 'mary@mail.com'},
    {name: 'Angela Mwaniki', contact: 0707000000, email: 'angela@mail.com'},
    {name: 'Jerry Johns', contact: 0707000000, email: 'jerry@mail.com'}
  ]
  products=[
    {product_name: "iPhone 14 Plus 512GB", description: faker::lorem, manufacturer: "Apple", product_image: "https://gadgetsleo.com/product/iphone-14-plus-512gb/"}
    {product_name: "Nokia G11 Plus", description: faker::lorem, manufacturer: "Nokia", product_image: "https://gadgetsleo.com/product/nokia-g11-plus/"}
    {product_name: "Infinix Zero Ultra 5G", description: faker::lorem, manufacturer: "Infinix", product_image: "https://gadgetsleo.com/product/infinix-zero-ultra-5g/"}
    {product_name: "Tecno Spark 9 Pro Sports Edition", description: faker::lorem, manufacturer: "Techno", product_image: "https://gadgetsleo.com/product/tecno-spark-9-pro-sports-edition/"}
    {product_name: "Samsung Galaxy M23 5G", description: faker::lorem, manufacturer: "Samsung", product_image: "https://gadgetsleo.com/product/samsung-galaxy-m23/"}
    {product_name: "Oppo Reno 8 4G", description: faker::lorem, manufacturer: "Oppo", product_image: "https://gadgetsleo.com/product/oppo-reno-8-4g/"}
  ]
  
  Review.create(comment: Faker::Lorem, user_id: user.id, product_id: product.id)
  
#   t.string "comment"
#   t.integer "user_id"
#   t.integer "product_id"
#   t.datetime "created_at"
#   t.datetime "updated_at"

  users.each do |u|
    User.create(u)
  end


#   create_table :users do |t|
#     t.string :name 
#     t.string :contact
#     t.string :email

puts "🌱 Done seeding!"
