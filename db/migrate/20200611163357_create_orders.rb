class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :customer_email
      t.string :customer_full_name
      t.text :customer_billing_address
      t.text :customer_shipping_address
      t.string :customer_country
      t.string :customer_phone
      t.integer :status
      t.string :delivery_method

      t.timestamps
    end
  end
end
