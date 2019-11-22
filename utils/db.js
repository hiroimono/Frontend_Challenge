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

exports.getPodcastsFromDatabaseDESC = () => {
    return db.query (`SELECT * FROM podlist order by star_num desc`)
        .then(({rows}) => {
            console.log('rows length taken from DB: ', rows.length);
            return rows;
        })
        .catch( err => console.log(err));
};

exports.getPodcastsFromDatabaseASC = () => {
    return db.query (`SELECT * FROM podlist order by star_num asc`)
        .then(({rows}) => {
            console.log('rows length taken from DB: ', rows.length);
            return rows;
        })
        .catch( err => console.log(err));
};

exports.getPodcastsFromDatabaseRAND = () => {
    return db.query (`
      UPDATE podlist
      SET star_num =
        (
          CASE (RANDOM() * 5)::INT
            WHEN 0 THEN 0
            WHEN 1 THEN 1
            WHEN 2 THEN 2
	          WHEN 3 THEN 3
            WHEN 4 THEN 4
            WHEN 5 THEN 5
          END
        ) where id<40`)
        .then( () => {
            return db.query (`SELECT * FROM podlist order by star_num desc`)
                .then(({rows}) => {
                    console.log('rows length taken from DB: ', rows.length);
                    return rows;
                })
                .catch( err => console.log(err));
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
