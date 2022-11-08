class user < ActiveRecord::Base
    has_many :reviews
    has_many :products, through: :reviews
end
