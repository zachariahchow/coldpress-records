# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artist1 = Artist.new(name: 'Sphaeras', bio: "Sphaeras is an instrumental math rock band from the small island nation of Singapore. Despite their geographic isolation, the young quartet has collaborated with many like-minded bands across the world. 2016's Sun Seeker is one of these projects: a full collaborative experiment with Brazilian math-rock outfit Odradek. The release incorporates Odradek's jazzy guitar work with Sphaeras' intensity to craft a potent release full of gorgeous tonality, dramatic crescendos and ever-changing time signatures.", facebook_url: 'https://www.facebook.com/sphrsband/', bandcamp_url: 'https://sphaeras.bandcamp.com/', thumbnail_img: 'https://scontent.fsin4-1.fna.fbcdn.net/v/t31.0-8/p960x960/22712300_757804501070431_7478439603168958281_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQlULApRN2Xr7AaCEQ43DaDaAdmLjj8g6sufCWhH4ulNanxFKx5KgZPyw6HHV99x1y8&_nc_ht=scontent.fsin4-1.fna&_nc_tp=6&oh=8727d6f242f6edce6454158fac25cdec&oe=5F065C32', banner_img: 'https://scontent.fsin4-1.fna.fbcdn.net/v/t31.0-0/p640x640/11071763_378660955651456_1802500238846291721_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_oc=AQlSKVF1VGXP8owuy_r8pnwjUcxGJrbrPUjjBu8rFJLX_LMaqCV3sOE8vcRt2ZW-THU&_nc_ht=scontent.fsin4-1.fna&_nc_tp=6&oh=30c116922899a0807f33e61e9b5c2a2a&oe=5F042459', instagram_url: 'https://www.instagram.com/sphaeras/', youtube_url: 'https://www.youtube.com/watch?v=AXXnE9EL27Y', spotify_url: 'https://open.spotify.com/artist/7qZzXw7TaWnIKpBSQZaIOK')

artist1.save