const spicedPg 			= require('spiced-pg');

let db;
if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    const { dbuser, dbpass } = require('./secret');
    // db = spicedPg(`postgres:postgres:postgres@localhost:5432/podlist`);
    db = spicedPg(`postgres:${dbuser}:${dbpass}@localhost:5432/podlist`); // more secure option to login
}

exports.db;

exports.registerPodcasts = (podlist_id, title, img_url) => {
    return db.query(
        `INSERT INTO podlist (podlist_id, title, img_url) VALUES ($1, $2, $3) RETURNING id`, //$1, $2 ... very important
        [podlist_id, title, img_url]
    );
};

exports.getPodcastsFromDatabase = () => {
    return db.query (`SELECT * FROM podlist order by id asc`)
        .then(({rows}) => {
            console.log('rows length taken from DB: ', rows.length);
            return rows;
        })
        .catch( err => console.log(err));
};

exports.saveStar = (id, star) => {
    return db.query (`UPDATE podlist SET star_num = $2 WHERE id = $1 RETURNING star_num`, [id, star])
        .then(({rows}) => {
            console.log('rows[0].star_num', rows[0].star_num);
            return rows[0].star_num;
        })
        .catch( err => console.log(err));
};
