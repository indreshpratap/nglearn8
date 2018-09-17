var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('./dao');

/**
 * 
 * @param {express app instance} expressApp 
 */
 function passportConfiguration(expressApp){
    expressApp.use(passport.initialize());
    expressApp.use(passport.session());
    // storing user data in session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // getting session data from session 
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    _configureLocalStrategy();

}


module.exports.passport = passport;
module.exports.passportConfiguration = passportConfiguration;

/**
 * Here done is a function which takes 3 parameters
 * done(error,userInfo,messageInfo)
 * 
 */
function _configureLocalStrategy() {
    passport.use(new LocalStrategy(function(username, password, done) {
        let data = {email:username,password:password};
        db.users.findOne(data, (err, doc) => {
            if (err) {
                done(err,false,null);
            }else if (doc && doc._id) {
                let user = {
                    name: doc.name,
                    role: doc.role,
                    id: doc._id
                }
                done(null,user); // user logged in successfully
            
            } else {
              done(null,false,{message: "Invalid username or password" });
            }
        })
               


    }));
}
