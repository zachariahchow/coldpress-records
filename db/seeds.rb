# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

##SPHAERAS

artist1 = Artist.new(name: 'Sphaeras', genre: "Experimental/Math Rock", origin: "Singapore", bio: "Sphaeras is an instrumental math rock band from the small island nation of Singapore. Despite their geographic isolation, the young quartet has collaborated with many like-minded bands across the world. 2016's Sun Seeker is one of these projects: a full collaborative experiment with Brazilian math-rock outfit Odradek. The release incorporates Odradek's jazzy guitar work with Sphaeras' intensity to craft a potent release full of gorgeous tonality, dramatic crescendos and ever-changing time signatures.", facebook_url: 'https://www.facebook.com/sphrsband/', bandcamp_url: 'https://sphaeras.bandcamp.com/', thumbnail_img: 'https://scontent.fsin3-1.fna.fbcdn.net/v/t31.0-8/25188865_778778895639658_4774048156930469276_o.jpg?_nc_cat=106&_nc_sid=2d5d41&_nc_oc=AQln-BEsNFtoSs-htMgUwhDuiRQHl0QWo0OxuGanbRkLZtDg2oc0vDnJx3pinlXOPeE&_nc_ht=scontent.fsin3-1.fna&oh=11167066f357ee1c44b8dab4707195e5&oe=5F093EA3', banner_img: 'https://scontent.fsin4-1.fna.fbcdn.net/v/t31.0-0/p640x640/11071763_378660955651456_1802500238846291721_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_oc=AQlSKVF1VGXP8owuy_r8pnwjUcxGJrbrPUjjBu8rFJLX_LMaqCV3sOE8vcRt2ZW-THU&_nc_ht=scontent.fsin4-1.fna&_nc_tp=6&oh=30c116922899a0807f33e61e9b5c2a2a&oe=5F042459', instagram_url: 'https://www.instagram.com/sphaeras/', youtube_url: 'https://www.youtube.com/watch?v=AXXnE9EL27Y', spotify_url: 'https://open.spotify.com/artist/7qZzXw7TaWnIKpBSQZaIOK')

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
twoseas.bandcamp.com", cover_img: "https://f4.bcbits.com/img/a2013052511_16.jpg", bandcamp_url: "http://sphaeras.bandcamp.com/album/moirai", bandcamp_album_code: "album=1429407341")

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

artist2 = Artist.new(name: 'La Petite Mort / Little Death', genre: "Punk/Emo/Screamo", origin: "Rodgau, Germany", bio: "being fresh since MMXIV", facebook_url: 'https://www.facebook.com/lapetitemort.littledeath/', bandcamp_url: 'https://lapetitemortlittledeath.bandcamp.com/', thumbnail_img: 'https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/83193641_1468945823259974_6409042897370349568_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_oc=AQn8M2QhE4bQmDzLeU30fJ2D6OrfxwRUVQxedbD_ut3C6gPojrcFb9SJQf1L9JE_jwk&_nc_ht=scontent.fsin3-1.fna&oh=f3ef954b3cd3214e55d0d9594e266437&oe=5F0AFF60', banner_img: 'https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/s960x960/20507147_846009695553593_1314621872257216242_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_oc=AQnhDAzwhjg1v4IMmwApMMJaPpJvjAWsiJx6WKGd1qYqV5wNI4fI0Ye7unR9glcLsEs&_nc_ht=scontent-sin6-1.xx&_nc_tp=7&oh=f80dfbd3d07b4f8ea1da56ec1e1a4cf0&oe=5F06406C', instagram_url: 'https://www.instagram.com/lapetitemortlittledeath', youtube_url: 'https://www.youtube.com/watch?v=yPfCYHuwSC0&feature=youtu.be', spotify_url: 'https://open.spotify.com/album/529rvOazzOGUolnkAE00cX?si=kPxMwHGRR1Cj5oTlaEY15A')

artist2.save

##La Petite Mort / Little Death DISCO

album2Disco = Album.new(artist_id: 2, name: "Disco", year_released: 2019, description: "

  La Petite Mort / Little Deaths first full-length, DISCO, marks the result of 5 years of trial-and-error. First and foremost DISCO is anything but DISCO.
  Well maybe it is after all. It’s the party you half-accidentaly stumble
  into, already way too inebriated. It’s wild, exhausting, loud, quiet, always looking for hold, a shoulder to lean on or to merely tap in hope of finding someone you know.

  DISCO was recorded in it’s entirety in the scorching summer of 2018 at Off The Road Studio Leipzig
with Adam Lenox Jr (LINGUA NADA), mostly live and at night, because of unbearable temperatures by day.", cover_img: "https://f4.bcbits.com/img/a2467413321_16.jpg", bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/", bandcamp_album_code: "album=3061120412")

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

##False Plaintiff

artist3 = Artist.new(name: 'False Plaintiff', genre: "Alternative/Emo/Spoken Word", origin: "Singapore", bio: "
Brandon Tanoto - Vocals
Bryner Tan - Guitars
Nicholas Phang - Guitars
Jonathan Vincent - Bass
Sydney Long - Drums", facebook_url: 'https://www.facebook.com/falseplaintiff/', bandcamp_url: 'https://falseplaintiff.bandcamp.com/', thumbnail_img: 'https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/37042068_2024214470946264_5222572703134777344_o.jpg?_nc_cat=110&_nc_sid=2d5d41&_nc_oc=AQm9SD0eyE4ARRZ_69B-l1VLdW8jA1CirRjmKhx36jmJNyizBRswd9XK09brADeU_Tc&_nc_ht=scontent.fsin3-1.fna&oh=34bca86482648e57bb9b6afb9faca71f&oe=5F0BABE3', banner_img: 'https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/s960x960/36844526_2015239001843811_3049879413878423552_o.jpg?_nc_cat=105&_nc_sid=9e2e56&_nc_oc=AQkGOwUgD6qYbPquAiZOwjk6BJtiWsXgeQ8j8eg8NxMCueuL0lU2u0zazpC7tH4XTMk&_nc_ht=scontent.fsin3-1.fna&_nc_tp=7&oh=0c7c61c0eb976d5fa2ab5698b079ff00&oe=5F0650C0', instagram_url: 'https://www.instagram.com/falseplaintiff', youtube_url: 'https://www.youtube.com/watch?v=yf6HSIIvUjw', spotify_url: 'https://open.spotify.com/artist/5M0kuVo4s6eHB4aWT2JLqw')

artist3.save

##False Plaintiff - Hive Mind (Single)

album3HiveMindSingle = Album.new(artist_id: 3, name: "Hive Mind (Single)", year_released: 2017, description: "Recorded, mixed and mastered by Aeonix Productions", cover_img: "https://f4.bcbits.com/img/a1264668808_16.jpg", bandcamp_url: "https://lapetitemortlittledeath.bandcamp.com/", bandcamp_album_code: "album=1272170655")

album3HiveMindSingle.save

##Hive Mind Songs

song24HiveMind = Song.new(album_id: 3, title: "Hive Mind", album_position: 1, bandcamp_url: "https://falseplaintiff.bandcamp.com/track/hive-mind")

song24HiveMind.save

##Patriot

artist4 = Artist.new(name: 'Sun Eater', genre: "Alternative Rock", origin: "Singapore", bio: "Sun Eater formed in 2017 and spent the next few months discovering their identity and evolving into the band they are today.

Adding KC Meals (vocals, guitar) to the group, Brandon Hon (guitar), Qimin Ong (bass) and Luke Tang (drums) solidified the lineup and shared a common vision - to create their own diverse sound of groove, technicality, and melody.

That vision came to light later that year when the band released their debut single 'Hindsight', recorded at Snakeweed Studios with local veteran and producer Leonard Soosay and mastered by Will Putney of Graphic Nature Audio in Belleville, New Jersey. Following that Sun Eater released their second single “Patriot”, which was also recorded by Soosay, and mastered by John Naclerio of Nada Recording Studio.

The combination of anecdotal experience along with the issues that society faces is what Sun Eater attempts to convey through song. As such every performance, be it a small venue filled with diehard music fans or a large stage filled with people from all walks of life, is a raw emotional experience filled with explosive energy and riveting groove.

Sun Eater has played on notable stages such as Aliwal Urban Arts Festival in 2019 and i Light Marina Bay in 2018.

Not wanting to conform to the need for releasing an LP, Sun Eater is currently working towards making music that they can put out on a consistent basis.", facebook_url: 'https://www.facebook.com/ssuneaterr/', bandcamp_url: 'https://ssuneaterr.bandcamp.com/', thumbnail_img: 'https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/s960x960/29133424_2056718174574619_2048600298116612096_o.jpg?_nc_cat=100&_nc_sid=2d5d41&_nc_oc=AQklBIbkZbKLS0g9qO4ycCNR55ppXPIE951cb7P0pUZrDyZnM8s6xLeBGMDlfza17QE&_nc_ht=scontent.fsin3-1.fna&_nc_tp=7&oh=2eaec2e8389dd932366814afb2467bea&oe=5F0549B4', banner_img: 'https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/29133424_2056718174574619_2048600298116612096_o.jpg?_nc_cat=100&_nc_sid=2d5d41&_nc_oc=AQklBIbkZbKLS0g9qO4ycCNR55ppXPIE951cb7P0pUZrDyZnM8s6xLeBGMDlfza17QE&_nc_ht=scontent.fsin3-1.fna&oh=6307abcffd654d7d7c359f2b7260815a&oe=5F06E955', instagram_url: 'https://www.instagram.com/ssuneaterr', youtube_url: 'https://www.youtube.com/watch?v=ZxdXCIuLkwo&', spotify_url: 'https://open.spotify.com/artist/6hm01MFd7ylbd8d3WXn9Tp?si=hJMHv1wXRjijicWg9CIKag')

artist4.save

##Patriot (Single)

album4PatriotSingle = Album.new(artist_id: 4, name: "Patriot (Single)", year_released: 2019, description: "Recorded, engineered and mixed by Leonard Soosay at Snakeweed Studios in Singapore
Mastered by John Naclerio at Nada Recording in Montgomery, New York", cover_img: "https://f4.bcbits.com/img/a3681083127_16.jpg", bandcamp_url: "https://ssuneaterr.bandcamp.com/track/patriot", bandcamp_album_code: "track=460356673")

album4PatriotSingle.save

##Sphaeras (Audiotree Live)

album5SphaerasAudiotree = Album.new(artist_id: 1, name: "Sphaeras Audiotree (Live)", year_released: 2018, description: "Live from Audiotree Chicago", cover_img: "https://f4.bcbits.com/img/a0045291083_16.jpg", bandcamp_url: "http://sphaeras.bandcamp.com/album/sphaeras-audiotree-live", bandcamp_album_code: "album=2628688586")

album5SphaerasAudiotree.save

##Two Seas

artist5 = Artist.new(name: 'Two Seas', genre: "Experimental / Alternative Rock", origin: "Singapore", bio: "Following an indefinite hiatus after their launch of I Will See You in Empty Spaces, the band spent the past several years reinventing their experimental brand of emotive rock. A long-awaited full-length is slated for a late 2020 release, and is a project that pays homage to their new experiences and those who have inspired them.", facebook_url: 'https://www.facebook.com/twoseasband', bandcamp_url: 'https://twoseas.bandcamp.com/', thumbnail_img: 'https://scontent.fsin3-1.fna.fbcdn.net/v/t31.0-8/12087838_988110254582175_4245221275069940157_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_oc=AQn22WzhG8roL2E8G5ipxTAwiFfqB4opgKRtsebITdiwik4ynSsout7QWFUZRJ-yO8c&_nc_ht=scontent.fsin3-1.fna&oh=252506c3b053e9affa3086bc0f3c0ef8&oe=5F0DB6AE', banner_img: 'https://scontent.fsin3-1.fna.fbcdn.net/v/t31.0-8/12087252_988113021248565_4313553479347552405_o.jpg?_nc_cat=104&_nc_sid=e007fa&_nc_oc=AQmuYYE-AxSc39UucrXa_xAKgSjw0FoMzP8lyWP1wxIB1_uyc3ZORml6VcKxsFjBkT0&_nc_ht=scontent.fsin3-1.fna&oh=3cc5f22f8b9c413b2886ad5678aa0474&oe=5F0D0B6A', instagram_url: 'https://www.instagram.com/twoseasband', youtube_url: 'https://www.youtube.com/user/TWOSEASband', spotify_url: 'https://open.spotify.com/artist/7iJY2J6zmnkFeOVoPZDnHM')

artist5.save

## Two Seas // I Will See You In Empty Spaces

album6TwoSeasIWSYIES = Album.new(artist_id: 5, name: "I Will See You In Empty Spaces", year_released: 2013, description: "Recorded and produced by Shaun Benjamin Stanislus (Special thanks to Wei Wen and Ze Wen)", cover_img: "https://f4.bcbits.com/img/a2430529899_16.jpg", bandcamp_url: "https://twoseas.bandcamp.com/album/i-will-see-you-in-empty-spaces", bandcamp_album_code: "album=840336185")

album6TwoSeasIWSYIES.save

## Two Seas // Self-Titled EP

album6TwoSeasIWSYIES = Album.new(artist_id: 5, name: "Self-Titled EP", year_released: 2013, description: "Recorded and produced by Shaun Benjamin Stanislus
(Special thanks to Wei Wen and Ze Wen)", cover_img: "https://f4.bcbits.com/img/a0533314650_16.jpg", bandcamp_url: "https://twoseas.bandcamp.com/album/self-titled-ep", bandcamp_album_code: "album=1887541269")

album6TwoSeasIWSYIES.save

#####
#####
#####
#####
#####
#####
#####
#####
#####

#####-----STORE--------#######

##Categories

category1 = Category.find_or_create_by(category_type: "vinyl/cds")
category2 = Category.find_or_create_by(category_type: "apparel")
category3 = Category.find_or_create_by(category_type: "accessories")
category4 = Category.find_or_create_by(category_type: "sale")
category5 = Category.find_or_create_by(category_type: "pre-orders")

##Options Option.find_or_create_by(name: , value: )

option1 = Option.find_or_create_by(name: "Press Variant", value: "Magenta Milk Marbled Vinyl (First Press: 500)")

option2 = Option.find_or_create_by(name: "Press Variant", value: "Sea Blue with Bone Splatter Vinyl (First Press: 200)")

##Products - Product.new(artist_id: , name: )
### ProductOption.find_or_create_by()

product1 = Product.find_or_create_by(artist_id: 2, name: 'Disco 12" Vinyl Record')

product1.categories << Category.find(1)

product1Option1 = ProductOption.find_or_create_by(product_id: 1, option_id: 1, stock: 100, price: 25, thumbnail_img1: "https://f4.bcbits.com/img/0017669048_10.jpg")

product2 = Product.find_or_create_by(artist_id: 1, name: 'Moirai 12" Vinyl Record')

product2.categories << Category.find(1)

product2Option2 = ProductOption.find_or_create_by(product_id: 2, option_id: 2, stock: 100, price: 32, thumbnail_img1: "https://f4.bcbits.com/img/0015887246_10.jpg")