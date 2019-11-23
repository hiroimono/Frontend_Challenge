const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();

const csurf = require('csurf');

app.use(compression());

app.use(express.static('public'));
app.use(express.json());

const cookieSessionMiddleware = cookieSession({
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secret: process.env.NODE_ENV == 'production' ?
        process.env.SESS_SECRET : require('./utils/secret').sessionSecret
});

app.use(cookieSessionMiddleware);

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie('mytoken', req.csrfToken());
    next();
});

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

//route for default page
app.use('/', require('./router/router'));

//every other routes comes before this
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Port ${PORT} is listening very carefully!!!...`));