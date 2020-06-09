# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

##SPHAERAS

artist1 = Artist.new(name: 'Sphaeras', genre: "Experimental/Math Rock", origin: "Singapore", bio: "Sphaeras is an instrumental math rock band from the small island nation of Singapore. Despite their geographic isolation, the young quartet has collaborated with many like-minded bands across the world. 2016's Sun Seeker is one of these projects: a full collaborative experiment with Brazilian math-rock outfit Odradek. The release incorporates Odradek's jazzy guitar work with Sphaeras' intensity to craft a potent release full of gorgeous tonality, dramatic crescendos and ever-changing time signatures.", facebook_url: 'https://www.facebook.com/sphrsband/', bandcamp_url: 'https://sphaeras.bandcamp.com/', thumbnail_img: 'https://scontent.fsin4-1.fna.fbcdn.net/v/t31.0-8/p960x960/22712300_757804501070431_7478439603168958281_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQlULApRN2Xr7AaCEQ43DaDaAdmLjj8g6sufCWhH4ulNanxFKx5KgZPyw6HHV99x1y8&_nc_ht=scontent.fsin4-1.fna&_nc_tp=6&oh=8727d6f242f6edce6454158fac25cdec&oe=5F065C32', banner_img: 'https://scontent.fsin4-1.fna.fbcdn.net/v/t31.0-0/p640x640/11071763_378660955651456_1802500238846291721_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_oc=AQlSKVF1VGXP8owuy_r8pnwjUcxGJrbrPUjjBu8rFJLX_LMaqCV3sOE8vcRt2ZW-THU&_nc_ht=scontent.fsin4-1.fna&_nc_tp=6&oh=30c116922899a0807f33e61e9b5c2a2a&oe=5F042459', instagram_url: 'https://www.instagram.com/sphaeras/', youtube_url: 'https://www.youtube.com/watch?v=AXXnE9EL27Y', spotify_url: 'https://open.spotify.com/artist/7qZzXw7TaWnIKpBSQZaIOK')

artist1.save

#SPHAERAS - MOIRAI

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
twoseas.bandcamp.com", cover_img: "https://f4.bcbits.com/img/a2013052511_16.jpg", bandcamp_url: "http://sphaeras.bandcamp.com/album/moirai", bandcamp_album_code: "1429407341")

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

##La Petite Mort / Little Death

artist2 = Artist.new(name: 'La Petite Mort / Little Death', genre: "Punk/Emo/Screamo", origin: "Rodgau, Germany", bio: "being fresh since MMXIV", facebook_url: 'https://www.facebook.com/lapetitemort.littledeath/', bandcamp_url: 'https://lapetitemortlittledeath.bandcamp.com/', thumbnail_img: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/72522588_1374508292703728_690821167161802752_n.png?_nc_cat=104&_nc_sid=85a577&_nc_oc=AQk-4YM7ESfoTyPLPEmrL6VAP7zDXbInM3n3OSfiMXs8Srx1hm6t0sJKxuD6mneC5Fg&_nc_ht=scontent-sin6-1.xx&oh=bd15280d3335dfb3ab1e96d750a488ed&oe=5F062AC5', banner_img: 'https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/s960x960/20507147_846009695553593_1314621872257216242_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_oc=AQnhDAzwhjg1v4IMmwApMMJaPpJvjAWsiJx6WKGd1qYqV5wNI4fI0Ye7unR9glcLsEs&_nc_ht=scontent-sin6-1.xx&_nc_tp=7&oh=f80dfbd3d07b4f8ea1da56ec1e1a4cf0&oe=5F06406C', instagram_url: 'https://www.instagram.com/lapetitemortlittledeath', youtube_url: 'https://www.youtube.com/watch?v=yPfCYHuwSC0&feature=youtu.be', spotify_url: 'https://open.spotify.com/album/529rvOazzOGUolnkAE00cX?si=kPxMwHGRR1Cj5oTlaEY15A')

artist2.save

##La Petite Mort / Little Death DISCO

album2Disco = Album.new(artist_id: 2, name: "Disco", year_released: 2019, description: "

  La Petite Mort / Little Deaths first full-length, DISCO, marks the result of 5 years of trial-and-error. First and foremost DISCO is anything but DISCO.
  Well maybe it is after all. It’s the party you half-accidentaly stumble
  into, already way too inebriated. It’s wild, exhausting, loud, quiet, always looking for hold, a shoulder to lean on or to merely tap in hope of finding someone you know.

  DISCO was recorded in it’s entirety in the scorching summer of 2018 at Off The Road Studio Leipzig
with Adam Lenox Jr (LINGUA NADA), mostly live and at night, because of unbearable temperatures by day.", cover_img: "https://f4.bcbits.com/img/a2467413321_16.jpg", bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/", bandcamp_album_code: "3061120412")

album2Disco.save

## DISCO songs

song11TheAntler = Song.new(album_id: 2, title: "The Antler", album_position: 1, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/the-antler")

song11TheAntler.save

song12Foreveroderkaputt = Song.new(album_id: 2, title: "Foreveroderkaputt", album_position: 2, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/foreveroderkaputt")

song12Foreveroderkaputt.save

song13Umami = Song.new(album_id: 2, title: "Umami", album_position: 3, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/umami")

song13Umami.save

song14StiffFingers = Song.new(album_id: 2, title: "Stiff Fingers", album_position: 4, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/stiff-fingers")

song14StiffFingers.save

song15SnufkinWeCanGo = Song.new(album_id: 2, title: "Snufkin, We Can Go!", album_position: 5, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/snufkin-we-can-go")

song15SnufkinWeCanGo.save

song16Brenzlig = Song.new(album_id: 2, title: "Brenzlig", album_position: 6, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/brenzlig")

song16Brenzlig.save

song17VeryEvilDemons = Song.new(album_id: 2, title: "(Very) Evil Demons", album_position: 7, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/very-evil-demons")

song17VeryEvilDemons.save

song18UneGrandeRue = Song.new(album_id: 2, title: "Une Grande Rue", album_position: 8, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/une-grande-rue")

song18UneGrandeRue.save

song19MioMio = Song.new(album_id: 2, title: "Mio Mio", album_position: 9, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/mio-mio")

song19MioMio.save

song20Glasa = Song.new(album_id: 2, title: "Glasa", album_position: 10, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/glasa")

song20Glasa.save

song21DerKleineLord = Song.new(album_id: 2, title: "Der Kleine Lord", album_position: 11, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/der-kleine-lord")

song21DerKleineLord.save

song22Dungeons = Song.new(album_id: 2, title: "Dungeons", album_position: 12, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/dungeons")

song22Dungeons.save

song23APianoInTheBasement = Song.new(album_id: 2, title: "A Piano In The Basement", album_position: 13, bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/track/a-piano-in-the-basement")

song23APianoInTheBasement.save

##