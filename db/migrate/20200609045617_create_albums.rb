class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.references :artist, null: false, foreign_key: true
      t.string :name
      t.integer :year_released
      t.text :description
      t.text :cover_img

      t.timestamps
    end
  end
end
