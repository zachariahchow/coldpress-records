class CreateCartDetails < ActiveRecord::Migration[6.0]
  def change
    create_table :cart_details do |t|
      t.references :cart, null: false, foreign_key: true
      t.references :product_option, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
