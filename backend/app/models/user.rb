class user < ActiveRecord::Base
    has many: reviews
    has many: products, through: :reviews
end
