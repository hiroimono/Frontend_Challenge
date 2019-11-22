const express               = require('express');
const db                    = require('../utils/db');

// /////////////////// For only one time usage for saving JSON data to database/////////////
// const podlist               = require ('../utils/podlist');
// console.log('podlist.length in db.js: ', podlist.length);
//
// for (var i = 0; i < podlist.length; i++) {
//     db.registerPodcasts(podlist[i].id, podlist[i].title, podlist[i].image)
//         .then( () => console.log('oneline podcast is added.'))
//         .catch( err => console.log(err));
// }
// /////////////////// For only one time usage for saving JSON data to database/////////////

const router = express.Router();

router.get('/getPodcastsFromDatabase', (req, res) => {
    db.getPodcastsFromDatabase()
        .then( (results) => {
            res.json(results);
        })
        .catch();
});

router.get('/getPodcastsFromDatabaseDESC', (req, res) => {
    db.getPodcastsFromDatabaseDESC()
        .then( (results) => {
            res.json(results);
        })
        .catch();
});

router.get('/getPodcastsFromDatabaseASC', (req, res) => {
    db.getPodcastsFromDatabaseASC()
        .then( (results) => {
            res.json(results);
        })
        .catch();
});

router.post('/send-star', (req, res) => {
    console.log('req.body in /send-star: ', req.body);
    let { id, star } = req.body;
    console.log('id: ', id, ' star: ', star);
    db.saveStar(id, star)
        .then( (result) => {
            console.log('Star is stored in DB succesfully!');
            console.log('/send-star, result: ', result);
            res.json(result);
        })
        .catch( err => console.log(err));
});


module.exports = router;
