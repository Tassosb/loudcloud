# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Track.destroy_all

User.create!(email: 'demo@loudcloud.com', password: 'loudcloud', name: 'LoudCloud User', location: "New York")
User.create!(email: 'test@loudcloud.com', password: 'loudcloud', name: 'Test User')


artists = [
    ['David Bowie', 'England', 1],
    ['Anderson .Paak', 'California', 2, "https://s3.amazonaws.com/seeds-source/anderson_.paak.png"],
    ['Andrew Bird', 'Somewhere pretty', 3],
    ['Esperanza Spaulding', 'New York', 4, "https://s3.amazonaws.com/seeds-source/esperanza_spaulding.png"],
    ['Gregory Alan Isakov', 'Colorado', 5, "https://s3.amazonaws.com/seeds-source/gregory_alan_isakov.png"],
    ['John Coltrane', 'USA', 6, "https://s3.amazonaws.com/seeds-source/john_coltrane.png"],
    ['Shakey Graves', 'Texas', 7, "https://s3.amazonaws.com/seeds-source/shakey_graves.png"],
    ['Snarky Puppy', 'Another level', 8],
    ['Sufjan Stevens', 'Brooklyn, NY', 9],
    ['Hiatus Kaiyote', 'Melbourne, Australia', 10, "https://s3.amazonaws.com/seeds-source/hiatus_kaiyote.png"],
    ["Bob Dylan", "Minnesota, USA", 11, "https://s3.amazonaws.com/seeds-source/bob_dylan.png"],
    ["Elephant Festival", "Colorado, USA", 12, "https://s3.amazonaws.com/seeds-source/elephant_festival.png"],
    ["Kamasi Washington", "Los Angeles", 13, "https://s3.amazonaws.com/seeds-source/kamasi_washington.png"],
    ["Elliot Smith", "Portland, Oregon", 14, "https://s3.amazonaws.com/seeds-source/elliot_smith.png"],
    ["KAYTRANADA", "Canada", 15, "https://s3.amazonaws.com/seeds-source/kaytranada.png"],
    ["Nathaniel Radteliff", "Denver, Colorado", 16, "https://s3.amazonaws.com/seeds-source/nathaniel_radcliffe.png"],
    ["Timbre Timbre", "Canada", 17, "https://s3.amazonaws.com/seeds-source/demon_host.png"]
]

tracks = {
  1 => [
    ['Life On Mars?', '', ],
    ['Rock and Roll Suicide', '']],
  2 => [
    ['Celebrate', '',
        "https://s3.amazonaws.com/seeds-source/celebrate.mp3"
      ],
    ['Suede', ''],
    ['Am I Wrong?', 'feat. ScHoolboy Q',
        "https://s3.amazonaws.com/seeds-source/06+Am+I+Wrong+(feat.+ScHoolboy+Q).mp3"
      ],
    ['The Bird', '',
        "https://s3.amazonaws.com/seeds-source/01+The+Bird.mp3"
      ],
    ["Heart Don't Stand a Chance", '',
        "https://s3.amazonaws.com/seeds-source/02+Heart+Don\'t+Stand+a+Chance.mp3"
      ]
  ],
  3 => [
    ['Pulaski at Night', '',
        "https://s3.amazonaws.com/seeds-source/04+Pulaski+at+Night.mp3",
        "https://s3.amazonaws.com/seeds-source/andrew_bird.png"
      ],
    ['Syrian Empires', ''],
    ['Sweep the Field', '']
  ],
  4 => [
    ['Unconditional Love', '',
        "https://s3.amazonaws.com/seeds-source/02+Unconditional+Love.mp3"
      ],
    ['Funk the Fear', '',
        "https://s3.amazonaws.com/seeds-source/11+Funk+the+Fear.mp3"]
  ],
  5 => [
    ['Saint Valentine', ''],
    ['The Trapeze Swinger', 'feat. Iron & Wine',
        "https://s3.amazonaws.com/seeds-source/04+The+Trapeze+Swinger+(Iron+%26+Wine).mp3"
      ],
    ['Stable Song', ''],
    ['Saint Valentine', '',
        "https://s3.amazonaws.com/seeds-source/02+Saint+Valentine.mp3",
        "https://s3.amazonaws.com/seeds-source/gregory_alan_isokov_track.png"
      ],
    ["John Brown's Body", '',
        "https://s3.amazonaws.com/seeds-source/06+John+Brown's+Body.mp3",
        "https://s3.amazonaws.com/seeds-source/gregory_alan_isokov_track.png"
      ],
    ['That Sea the Gambler', '',
        "https://s3.amazonaws.com/seeds-source/08+That+Sea%2C+the+Gambler.mp3",
        "https://s3.amazonaws.com/seeds-source/gregory_alan_isokov_track.png"
      ],
    ["Suitcase Full Of Sparks", '',
        "https://s3.amazonaws.com/seeds-source/01+Suitcase+Full+Of+Sparks.mp3"
      ]
  ],
  6 => [
    ['A Love Supreme, Pt. 1: Acknowledgement', '',
        'https://s3.amazonaws.com/seeds-source/01+A+Love+Supreme%2C+Pt.+1_+Acknowledgement.mp3'
      ]
  ],
  7 => [
    ["Nobody's Fool", '',
        "https://s3.amazonaws.com/seeds-source/02+Nobody's+Fool.mp3"
      ],
    ['Late July', ''],
    ['A Dream is W Wish Your Heart Makes', ''],
    ['Donor Blues', ''],
    ['Pay The Road', '',
        "https://s3.amazonaws.com/seeds-source/05+Pay+The+Road.mp3"
      ],
    ['Seeing All Red', '',
        "https://s3.amazonaws.com/seeds-source/06+Seeing+All+Red.mp3"
      ],
    ['A Dream is A Wish Your Heart Makes', '',
        "https://s3.amazonaws.com/seeds-source/10+A+Dream+is+A+Wish+Your+Heart+Makes.mp3"
      ]
  ],
  8 => [
    ['Lingus', '',
        "https://s3.amazonaws.com/seeds-source/08+Lingus.mp3",
        "https://s3.amazonaws.com/seeds-source/snarky_puppy.png"
      ],
    ['Free Your Dreams', 'with Chantae Cann',
        "https://s3.amazonaws.com/seeds-source/01+Free+Your+Dreams+(with+Chantae+Cann).mp3"
      ],
    ['Something', 'with Lalah Hathaway',
        "https://s3.amazonaws.com/seeds-source/05+Something+(with+Lalah+Hathaway).mp3"
      ],
    ["Amour T'es La", 'with Magda Giannikou',
        "https://s3.amazonaws.com/seeds-source/04+Amour+T'es+La+(with+Magda+Giannikou).mp3"
      ],
    ["I'm Not the One", 'with Malika Tirolien',
        "https://s3.amazonaws.com/seeds-source/08+I'm+Not+the+One+(with+Malika+Tirolien).mp3"
      ]
  ],
  9 => [
    ['Lakes of Canada', '',
        "https://s3.amazonaws.com/seeds-source/Lakes+of+Canada.mp3"
      ],
    ['Casimir Pulaski Day', '']
  ],
  10 => [
    ['Choose Your Weapon', '',
        'https://s3.amazonaws.com/seeds-source/01+Choose+Your+Weapon.mp3'
      ],
    ['Shaolin Monk Motherfunk', '',
        "https://s3.amazonaws.com/seeds-source/02+Shaolin+Monk+Motherfunk.mp3"
      ]
  ],
  11 => [
    ['Last Thoughts On Woody Guthrie (Live)', '',
        "https://s3.amazonaws.com/seeds-source/1-22+Last+Thoughts+On+Woody+Guthrie+(Live).mp3"
      ]
  ],
  12 => [
    ['Point of You', '',
        "https://s3.amazonaws.com/seeds-source/01+Point+of+You.mp3"
      ],
    ['Cosmic Pulse', '',
        "https://s3.amazonaws.com/seeds-source/02+Cosmic+Pulse.mp3"
      ],
    ['What Is Time', '',
        "https://s3.amazonaws.com/seeds-source/07+What+Is+Time_.mp3"
      ],
    ['Go On', '',
        "https://s3.amazonaws.com/seeds-source/11+Go+On.mp3"
      ]
  ],
  13 => [
    ['Magnificent 7', '',
        "https://s3.amazonaws.com/seeds-source/2-06+The+Magnificent+7.mp3"
      ]
  ],
  14 => [
    ['No Name #1', '',
        "https://s3.amazonaws.com/seeds-source/03+No+Name+%231.mp3"
      ]
  ],
  15 => [
    ['TRACK UNO', '',
        "https://s3.amazonaws.com/seeds-source/01+TRACK+UNO.mp3"
      ],
    ['BUS RIDE', 'feat. Karriem Riggins & River Tiber',
        "https://s3.amazonaws.com/seeds-source/02+BUS+RIDE+(feat.+Karriem+Riggins+%26+River+Tiber).mp3"
      ],
    ['BULLETS', 'feat. Little Dragon',
        "https://s3.amazonaws.com/seeds-source/15+BULLETS+(feat.+Little+Dragon).mp3"
      ]
  ],
  16 => [
    ["Don't Get Too Close", '',
        "https://s3.amazonaws.com/seeds-source/03+Don't+Get+Too+Close.m4a"
      ],
    ["Right On", '',
        "https://s3.amazonaws.com/seeds-source/07+Right+On.m4a"
      ]
  ],
  17 => [
    ["Demon Host", '',
        "https://s3.amazonaws.com/seeds-source/01+Demon+Host.mp3"
      ]
  ]

}



artists.each do |name, location, temp_id, image_url|

  fname = name.split(' ').first.downcase

  user = User.new(
  name: name,
  email: "#{fname}@loudcloud.com",
  password: "#{fname}1234",
  location: location
  )

  puts "Opening user image"
  if image_url
    user_image_file = open(image_url)
    user.image = user_image_file
  end
  puts "Saving user"
  user.save!

  puts "Creating User Tracks"
  tracks[temp_id].each do |title, credits, audio_url, track_image_url|
    next unless audio_url

    track = Track.new(
      title: title,
      credits: credits,
      artist_id: user.id
      )

    if track_image_url
      file = open(track_image_url)
      track.image = file
      puts "Added the track image to a track"
    elsif user_image_file
      track.image = user_image_file
      puts "Added the artist image to a track"
    end

    puts "Opening audio file"
    file = open(audio_url)
    track.audio = file
    puts "Saving track"
    track.save!
  end
end

comments = [
  "great song",
  "love it",
  "Here is a very very looooooooong comment that I am. I am very moved by your work please contact me I am a musician we can collaborate",
  "Cool",
  "Dig it",
  "I like the loud parts",
  "Great lyrics",
  "Reminds me of the 80's",
  "Awesome work",
  "I've listened to this song like 50 times",
  "Sad.. :(",
  "I wake up to this song every day"
]

user_ids = (User.first.id..User.last.id).to_a
track_ids = (Track.first.id..Track.last.id).to_a

5.times do
  comments.each do |comment|
    curr_user_id = user_ids.sample
    curr_track_id = track_ids.sample

    Comment.create!(
    body: comment,
    author_id: curr_user_id,
    track_id: curr_track_id
    )
  end
end
