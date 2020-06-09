class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.references :album, null: false, foreign_key: true
      t.integer :album_position
      t.text :bandcamp_url
      t.text :soundcloud_url
      t.text :youtube_url
      t.text :spotify_url
      t.text :thumbnail_img

      t.timestamps
    end
  end
end
