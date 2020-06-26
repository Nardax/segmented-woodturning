const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
<<<<<<< HEAD
const FACEBOOK_APP_ID = '899562153883740';
const FACEBOOK_APP_SECRET = '328d752f418082050bd1477b8caf8ca5';
=======
const FACEBOOK_APP_ID = 899562153883740;
const FACEBOOK_APP_SECRET = 328d752f418082050bd1477b8caf8ca5;
>>>>>>> 35f3298eb041885f94acde71bb63283265476fef


app.use(bodyParser.json());
app.use(session({
    secret:'',
    resave: true,
    saveUninitialized: true
}));

const fbOpts = {
    clientID:FACEBOOK_APP_ID,
<<<<<<< HEAD
    clientSecret:FACEBOOK_APP_SECRET,
=======
    clientSecret: FACEBOOK_APP_SECRET,
>>>>>>> 35f3298eb041885f94acde71bb63283265476fef
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