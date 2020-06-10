class Product < ApplicationRecord
  belongs_to :artist
  has_and_belongs_to_many :categories
  has_many :product_options
  has_many :options, through: :product_options
end