# Frontend_Challenge

## Mission:

1. Pick your top 10+ fav books, movies, video games, food, or whatever you
   wish. Build an Angular + ngrx/store or react-redux app that lists these
   items. Initial list of any of these item can be stored in json file no
   need to write a backend service.

2. Create a rating system where you can rate each item. Order the list by
   the highest rated item to lowest rated item. Re-order the list, if needed,
   when user ranks an item.

3. Using RxJS or any other library, randomly rate items at random times,
   also re-ordering the list as necessary. To elaborate this more put a
   button called RANDOM RATING and on click of this button code will start
   rating random item at random time with random rating. And on same button
   press again it will stop random rating.

4. Feel free to use any UI elements or library.

5. Focus on test driven approach while coding this assignment.

6. Git repo with commit messages will be a plus.

# Solution:

To see challenge after production, visit live heroku page: https://challenge--frontend.herokuapp.com/

## General info

This project is simple a template for any list of Items with a rating system.

## Technologies

Project is created with:

-   Node.js / Express
-   React
-   Redux
-   Hooks
-   Webpack
-   Babel
-   PostgreSQL

## Setup

To run this project and install it locally using npm, make this steps:

### Initial Settings

```
$ git clone https://github.com/hiroimono/Frontend_Challenge.git
$ cd ../Frontend_Challenge
$ npm install
$ node ./bundle-server.js
$ npm start  (or '$ node .' or '$ nodemon . ')
```

### Database Settings

For this part, PostgreSQL must be installed on the computer.

```
$ cd ../Frontend_Challenge/sql/
$ sudo service postgresql start
$ createdb podlist
$ psql -d podlist -f podlist.sql

```

To be able to save the podcast list to the database named 'podlist':

-   Open '../Frontend_Challenge/utils/secret.json' file
-   Enter your own postgres database's username and password in order to access 'podlist' table (if the username and password are 'postgres' and 'postgres', you can leave it same.)
-   Enter also this username and password to '../Frontend_Challenge/utils/db.js' file's 12'th line as 'dbuser' and 'dbpass'.
-   open ../Frontend_Challenge/router/router.js file
-   Open the comment lines between 4'th and 13'th (use Ctl + #) and save (Ctl + S) the file to be able send some information we need from 'podlist.json' file to the database 'podlist'.
-   Restart project again ('npm start' or 'node .' or 'nodemon .' )
-   After this restarting, the JSON file at '../Frontend_Challenge/utils/podlist.json' should be saved to the database 'podlist'.
-   Close the comment lines between 4'th and 13'th (use Ctl + #) and save (Ctl + S) it again. We no longer need this part and this JSON file. We just used it only to save some data of podcasts to our 'podlist' database we created.
-   Stop (Ctl + C) and restart project again ('npm start' or 'node .' or 'nodemon .' )

Visit live page: https://challenge--frontend.herokuapp.com/
