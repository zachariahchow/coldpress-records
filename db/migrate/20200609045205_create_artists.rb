class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.text :bio
      t.text :facebook_url
      t.text :bandcamp_url
      t.text :thumbnail_img
      t.text :banner_img
      t.text :website_url
      t.text :twitter_url
      t.text :instagram_url
      t.text :youtube_url
      t.text :spotify_url
      t.text :ssoundcloud_url

      t.timestamps
    end
  end
end
