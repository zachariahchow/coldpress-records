# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artist1 = Artist.new(name: 'Sphaeras', bio: "Sphaeras is an instrumental math rock band from the small island nation of Singapore. Despite their geographic isolation, the young quartet has collaborated with many like-minded bands across the world. 2016's Sun Seeker is one of these projects: a full collaborative experiment with Brazilian math-rock outfit Odradek. The release incorporates Odradek's jazzy guitar work with Sphaeras' intensity to craft a potent release full of gorgeous tonality, dramatic crescendos and ever-changing time signatures.", facebook_url: 'https://www.facebook.com/sphrsband/', bandcamp_url: 'https://sphaeras.bandcamp.com/', thumbnail_img: 'https://scontent.fsin4-1.fna.fbcdn.net/v/t31.0-8/p960x960/22712300_757804501070431_7478439603168958281_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQlULApRN2Xr7AaCEQ43DaDaAdmLjj8g6sufCWhH4ulNanxFKx5KgZPyw6HHV99x1y8&_nc_ht=scontent.fsin4-1.fna&_nc_tp=6&oh=8727d6f242f6edce6454158fac25cdec&oe=5F065C32', banner_img: 'https://scontent.fsin4-1.fna.fbcdn.net/v/t31.0-0/p640x640/11071763_378660955651456_1802500238846291721_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_oc=AQlSKVF1VGXP8owuy_r8pnwjUcxGJrbrPUjjBu8rFJLX_LMaqCV3sOE8vcRt2ZW-THU&_nc_ht=scontent.fsin4-1.fna&_nc_tp=6&oh=30c116922899a0807f33e61e9b5c2a2a&oe=5F042459', instagram_url: 'https://www.instagram.com/sphaeras/', youtube_url: 'https://www.youtube.com/watch?v=AXXnE9EL27Y', spotify_url: 'https://open.spotify.com/artist/7qZzXw7TaWnIKpBSQZaIOK')

artist1.save

album1Moirai = Album.new(artist_id: 1, name: "Moirai", year_released: 2015, description: "Recorded by
Leonard Soosay at Snakeweed Studios
www.snakeweedstudios.com

Mixed and mastered by
Carl Amburn at the Mousetrap in Norman OK
Assisted by George Pauley
www.carlamburn.com

Album Art by Hafiz Hanafi

With support from National Arts Council, Singapore.

All songs written and performed by Sphaeras
Track 8 ‘Ensemble’ written and performed by Sphaeras and Two Seas
facebook.com/twoseasband
twoseas.bandcamp.com", cover_img: "https://f4.bcbits.com/img/a2013052511_16.jpg", bandcamp_url: "http://sphaeras.bandcamp.com/album/moirai")

album1Moirai.save

#Moirai - songs

song1Mono = Song.new(album_id: 1, title: "Mono", album_position: 1, bandcamp_url: "https://sphaeras.bandcamp.com/track/mono")

song1Mono.save

song2Myth = Song.new(album_id: 1, title: "Myth", album_position: 2, bandcamp_url: "https://sphaeras.bandcamp.com/track/myth")

song2Myth.save

song3Delorean = Song.new(album_id: 1, title: "Delorean", album_position: 3, bandcamp_url: "https://sphaeras.bandcamp.com/track/delorean")

song3Delorean.save

song4Lambda = Song.new(album_id: 1, title: "λ", album_position: 4, bandcamp_url: "https://sphaeras.bandcamp.com/track/-")

song4Lambda.save

song5SameDecayingMatter = Song.new(album_id: 1, title: "λ", album_position: 5, bandcamp_url: "https://sphaeras.bandcamp.com/track/same-decaying-matter")

song5SameDecayingMatter.save

song6AlbertFish = Song.new(album_id: 1, title: "Albert Fish", album_position: 6, bandcamp_url: "https://sphaeras.bandcamp.com/track/albert-fish")

song6AlbertFish.save

song7Manniska = Song.new(album_id: 1, title: "Människa", album_position: 7, bandcamp_url: "https://sphaeras.bandcamp.com/track/m-nniska")

song7Manniska.save

song8Ensemble = Song.new(album_id: 1, title: "Ensemble (Sphaeras x Two Seas)", album_position: 8, bandcamp_url: "https://sphaeras.bandcamp.com/track/ensemble-sphaeras-x-two-seas")

song8Ensemble.save

song9Akinetic = Song.new(album_id: 1, title: "Akinetic", album_position: 9, bandcamp_url: "https://sphaeras.bandcamp.com/track/akinetic")

song9Akinetic.save

song10Mutism = Song.new(album_id: 1, title: "Mutism", album_position: 10, bandcamp_url: "https://sphaeras.bandcamp.com/track/mutism")

song10Mutism.save