class CreateProductOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :product_options do |t|
      t.references :product, null: false, foreign_key: true
      t.references :option, null: false, foreign_key: true
      t.integer :stock
      t.decimal :price

      t.timestamps
    end
  end
end
