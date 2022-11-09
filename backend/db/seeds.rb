puts "🌱 Seeding data..."

# place your seeds here


users = [
    {name: 'Timothy Mureithi', contact: 0707000000, email: 'timothy@mail.com'},
    {name: 'Chris Achinga', contact: 0707000000, email: 'chris@mail.com'},
    {name: 'Mary Wairimu', contact: 0707000000, email: 'mary@mail.com'},
    {name: 'Angela Mwaniki', contact: 0707000000, email: 'angela@mail.com'},
    {name: 'Jerry Johns', contact: 0707000000, email: 'jerry@mail.com'}
  ]
  products=[product_name: "Apple", description: faker::lorem, manufacturer: "Apple", product_image: "https://gadgetsleo.com/product/iphone-14-pro-max-1tb/?utm_source=Google%20Shopping&utm_campaign=Google%20Shopping%20Ads&utm_medium=cpc&utm_term=28795&gclid=EAIaIQobChMIxpy0zaKh-wIVa4xoCR1J2wUDEAQYASABEgLUQPD_BwE"

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
