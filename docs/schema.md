# Schema

## users

column name | data type | details
----------- | --------- | -------
id          | integer   | not null, primary key
email       | string    | not null, indexed, unique
name        | string    | not null
password_digest | string | not null
session_token | string | not null, indexed, unique
image_url   | string
location    | string

## sessions

column name | data type | details
----------- | --------- | -------
id          | integer   | not null, primary key
user_id     | integer   | not null, index
http_user_agent | string | not null

## tracks

column name | data type | details
----------- | --------- | -------
id          |  integer  | not null, primary key
title       |  string   | not null, indexed
media_url   |  string   | not null
user_id     |  integer  | not null, foreign key (references users), indexed
image_url   |  string
track_credits | string
created_at  |  date     | not null, indexed

## comments
column name | data type | details
----------- | --------- | -------
id          |  integer  | not null, primary key
body        |  text     | not null
author_id   |  integer  | not null, foreign key (references users), indexed
track_id    |  integer  | not null, foreign key (references tracks), indexed
created_at  |  date     | not null, indexed

## likes

column name | data type | details
----------- | --------- | -------
id          |  integer  | not null, primary key
user_id     |  integer  | not null, foreign key (references user), indexed
track_id    |  integer  | not null, foreign key (references track), indexed
