class AddBandcampUrlToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :bandcamp_url, :text
  end
end
