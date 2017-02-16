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
    ['Anderson .Paak', 'California', 2],
    ['Andrew Bird', 'Somewhere pretty', 3],
    ['Esperanza Spaulding', 'New York', 4],
    ['Gregory Alan Isakov', 'Colorado', 5],
    ['John Coltrane', 'USA', 6],
    ['Shakey Graves', 'Texas', 7],
    ['Snarky Puppy', 'Another level', 8],
    ['Sufjan Stevens', 'Brooklyn, NY', 9],
    ['Hiatus Kaiyote', 'Outer Space', 10]
]

tracks = {
  1 => [
    ['Life On Mars?', '', ],
    ['Rock and Roll Suicide', '']],
  2 => [
    ['Celebrate', ''
      ],
    ['Suede', ''],
    ['Am I Wrong?', 'feat. ScHoolboy Q'],
    ['The Bird', '',
        "https://s3.amazonaws.com/seeds-source/01+The+Bird.mp3"
      ],
    ["Heart Don't Stand a Chance", '',
        "https://s3.amazonaws.com/seeds-source/02+Heart+Don\'t+Stand+a+Chance.mp3"
      ]
  ],
  3 => [
    ['Pulaski at Night', ''],
    ['Syrian Empires', ''],
    ['Sweep the Field', '']
  ],
  4 => [
    ['Unconditional Love', '']
  ],
  5 => [
    ['Saint Valentine', ''],
    ['The Trapeze Swinger', 'feat. Iron & Wine'],
    ['Stable Song', ''],
    ['Saint Valentine', '',
        "https://s3.amazonaws.com/seeds-source/02+Saint+Valentine.mp3"
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
    ['Donor Blues', '']
  ],
  8 => [
    ['Lingus', ''],
    ['Free Your Dreams', 'with Chantae Cann',
        "https://s3.amazonaws.com/seeds-source/01+Free+Your+Dreams+(with+Chantae+Cann).mp3"
      ]
  ],
  9 => [
    ['Lakes of Canada', ''],
    ['Casimir Pulaski Day', '']
  ],
  10 => [
    ['Choose Your Weapon', '',
        'https://s3.amazonaws.com/seeds-source/01+Choose+Your+Weapon.mp3'
      ],
    ['Shaolin Monk Motherfunk', '',
        "https://s3.amazonaws.com/seeds-source/02+Shaolin+Monk+Motherfunk.mp3"
      ]
  ]
}



artists.each do |name, location, temp_id|
  fname = name.split(' ').first.downcase
  puts "Creating users"
  user = User.create!(
    name: name,
    email: "#{fname}@loudcloud.com",
    password: "#{fname}1234",
    location: location
    )

  puts "Creating Tracks"
  tracks[temp_id].each do |title, credits, audio_url|
    next unless audio_url

    track = Track.new(
      title: title,
      credits: credits,
      artist_id: user.id
      )

    puts "Opening audio file"
    file = open(audio_url)
    track.audio = file
    puts "Saving track"
    track.save!
  end
end
