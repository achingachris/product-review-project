puts "🌱 Seeding data..."

# place your seeds here


users = [
    {name: 'Timothy Mureithi', contact: 0707000000, email: 'timothy@mail.com'},
    {name: 'Chris Achinga', contact: 0707000000, email: 'chris@mail.com'},
    {name: 'Mary Wairimu', contact: 0707000000, email: 'mary@mail.com'},
    {name: 'Angela Mwaniki', contact: 0707000000, email: 'angela@mail.com'},
    {name: 'Jerry Johns', contact: 0707000000, email: 'jerry@mail.com'}
  ]

  Product.create(product_name: "Iphone 13", description: "It's OK", manufacturer:"Apple", product_image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg")

#   t.string :product_name
#   t.string :description
#   t.string :manufacturer
#   t.datetime :date_created
#   t.datetime :updated_at
#   t.string :product_image

  Review.create(comment: "It was average", user_id: 2, product_id: 1)
  Review.create(comment: "It was OK", user_id: 4, product_id: 3)

  
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
