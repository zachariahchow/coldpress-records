class Cart < ApplicationRecord
  belongs_to :customer, optional: true
  has_many :cart_details
  has_many :product_options, through: :cart_details
end