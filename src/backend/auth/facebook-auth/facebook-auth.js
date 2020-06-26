const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const FACEBOOK_APP_ID = 899562153883740;
const FACEBOOK_APP_SECRET = 328d752f418082050bd1477b8caf8ca5;


app.use(bodyParser.json());
app.use(session({
    secret:'',
    resave: true,
    saveUninitialized: true
}));

const fbOpts = {
    clientID:FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['emails'],
};

const fbCallback = function(accessToken, refreshToken, profile, cb){
    console.log(accessToken, refreshToken, profile);
};

passport.use(new FacebookStrategy(fbOpts, fbCallback));


app.route('/')
    .get(passport.authenticate('facebook', {scope: ['email']}));

app.route('/auth/facebook/callback')
    .get(passport.authenticate('facebook', function(err, user, info){
        //database save.
    }))

app.listen(3000);