class ChangeSoundcloudColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :artists, :ssoundcloud_url, :soundcloud_url
  end
end