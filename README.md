# Pages!

## Introduction

This app was created in order to keep track of your book reading progress, and to
be able to see what others are reading.

+ Client site: https://asangurima.github.io/Pages/#/
+ Client repo: https://github.com/asangurima/Pages
+ Server site: https://desolate-crag-76210.herokuapp.com
+ Server repo: https://github.com/asangurima/pages-api

## Getting Started
Simply go to https://asangurima.github.io/Pages/#/, sign up, sign in, and create
new books!

## Technologies used
Client Side
+ HTML
+ CSS + SASS
+ Javascript
+ JSX
+ React

Server Side
+ Rails
+ pSQL
+ Ruby

#### Set Up and Installation
+ Fork and clone the respository locally
+ Navigate to the respository locally
+ Run npm install
+ Run npm i react-bs-notifier
+ To test locally, npm start
+ You will also need to set up the pages API. Find set up instructions on the repo: https://github.com/asangurima/pages-api

## Planning, Process, and Problem-Solving
I was given the task of creating a full-stack app in 4 days. I chose to use Rails
for the back end since it was something I was comfortable with.
I chose to use React for the front end as a challenge for myself.
My strategy was to quickly set up the API, test it, and deploy. Then focus on
the front end.

+ Create ERD and wireframes
+ Develop routes on server and client side
+ Set up api
+ Test API with curl script
+ Deploy back end
+ Lay out React routes
+ Develop and test resource routes
+ Add features for UI
+ User testing and error finding
+ Deploy to production and continue testing

I had some challenges with React and had to pull back on my plan in order to meet
MVP. I have a lot of features I plan to add in the future!
+ Add back in page progress for books
+ Add ability to see which users are reading which books
+ Filtering/ search features
+ Use custom routes I created
+ Styling
+ Add a progress percentage bar


The biggest challenge I encoutered was having Rails and React work well together.
It slowed me down and I was unable to reach all my goals.
I would like to rebuild the back end with Express in the future.

## Wireframe
![Imgur](https://i.imgur.com/kYbUiiP.jpg)

## User Stories
+ As an unregistered user, I would like to sign up with email and password.
+ As a registered user, I would like to sign in with email and password.
+ As a signed in user, I would like to change password.
+ As a signed in user, I would like to sign out.
+ As a signed in user, I would like to create a book.
+ As a signed in user, I would like to update my books.
+ As a signed in user, I would like to see all books.
+ As a signed in user, I would like to see only my books.
+ As a signed in user, I would like to delete my books.
+ As a signed in user, I would like to see the following information about a book:
- title
- author
- date started
- total pages
- current page
