 class Product < ActiveRecord::Base
    has many: reviews
    has many: users, through : :reviews
 end