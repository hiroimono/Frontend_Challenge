const express               = require('express');
const db                    = require('../utils/db');

///////////////////// For only one time usage for saving JSON data to database/////////////
// const podlist               = require ('../utils/podlist');
// console.log('podlist.length in db.js: ', podlist.length);
//
// for (var i = 0; i < podlist.length; i++) {
//     db.registerPodcasts(podlist[i].id, podlist[i].title, podlist[i].image)
//         .then( () => console.log('oneline podcast is added.'))
//         .catch( err => console.log(err));
// }
///////////////////// For only one time usage for saving JSON data to database/////////////

const router = express.Router();


module.exports = router;
