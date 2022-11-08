puts "🌱 Seeding data..."

# place your seeds here


users = [
    {name: 'Timothy Mureithi', contact: 0707000000, email: 'timothy@mail.com'},
    {name: 'Chris Achinga', contact: 0707000000, email: 'chris@mail.com'},
    {name: 'Mary Wairimu', contact: 0707000000, email: 'mary@mail.com'},
    {name: 'Angela Mwaniki', contact: 0707000000, email: 'angela@mail.com'},
    {name: 'Jerry Johns', contact: 0707000000, email: 'jerry@mail.com'}
  ]
  
  users.each do |u|
    User.create(u)
  end


#   create_table :users do |t|
#     t.string :name 
#     t.string :contact
#     t.string :email

puts "🌱 Done seeding!"
