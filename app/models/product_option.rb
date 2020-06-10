class ProductOption < ApplicationRecord
  belongs_to :product
  belongs_to :option
  has_many :cart_details
  has_many :carts, through: :cart_details
end