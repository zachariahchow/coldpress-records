class AddBandcampAlbumCodeToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :bandcamp_album_code, :string
  end
end
