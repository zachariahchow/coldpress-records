class Artist < ApplicationRecord
    has_many :albums
    has_many :products
    # has_many :songs
end