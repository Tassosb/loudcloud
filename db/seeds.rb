# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

User.create!(email: 'demo@loudcloud.com', password: 'loudcloud', name: 'LoudCloud User')
User.create!(email: 'test@loudcloud.com', password: 'loudcloud', name: 'Test User')
