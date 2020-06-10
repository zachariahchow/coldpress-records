class AddThumbnailImg1ToProductOptions < ActiveRecord::Migration[6.0]
  def change
    add_column :product_options, :thumbnail_img1, :text
  end
end
