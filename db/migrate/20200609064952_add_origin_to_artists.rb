class AddOriginToArtists < ActiveRecord::Migration[6.0]
  def change
    add_column :artists, :origin, :string
  end
end
