class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :category_type
      t.text :thumbnail

      t.timestamps
    end
  end
end
