class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :product_name
      t.string :description
      t.string :manufacturer
      t.datetime :created_at
      t.datetime :updated_at
      t.string :product_image
    end
  end
end
