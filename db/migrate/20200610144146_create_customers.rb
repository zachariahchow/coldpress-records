class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.text :billing_address
      t.text :shipping_address
      t.string :country
      t.string :phone

      t.timestamps
    end
  end
end
