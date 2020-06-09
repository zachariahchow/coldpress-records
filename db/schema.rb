# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_09_064952) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.bigint "artist_id", null: false
    t.string "name"
    t.integer "year_released"
    t.text "description"
    t.text "cover_img"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "bandcamp_url"
    t.index ["artist_id"], name: "index_albums_on_artist_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.text "bio"
    t.text "facebook_url"
    t.text "bandcamp_url"
    t.text "thumbnail_img"
    t.text "banner_img"
    t.text "website_url"
    t.text "twitter_url"
    t.text "instagram_url"
    t.text "youtube_url"
    t.text "spotify_url"
    t.text "soundcloud_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "origin"
  end

  create_table "songs", force: :cascade do |t|
    t.bigint "album_id", null: false
    t.integer "album_position"
    t.text "bandcamp_url"
    t.text "soundcloud_url"
    t.text "youtube_url"
    t.text "spotify_url"
    t.text "thumbnail_img"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "title"
    t.index ["album_id"], name: "index_songs_on_album_id"
  end

  add_foreign_key "albums", "artists"
  add_foreign_key "songs", "albums"
end
