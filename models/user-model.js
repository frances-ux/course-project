const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {Schema} = mongoose;
const mongooseFindOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
    }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(mongooseFindOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, username: user.username, name: user.displayName });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "https://uptight-gray-tadpole.cyclic.app/auth/google/admin-console",
    },
    function(accessToken, refreshToken, email, cb) {
        User.findOrCreate({ googleId: email.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

module.exports = User;
