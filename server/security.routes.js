var Router = require('express').Router;
var db = require('./dao');
var { OK,NOT_OK, ERROR } = require('./route.helper');
var security = new Router();
var passport = require('./passport-config').passport;

security.get('/add-admin', (req, res) => {
    let data = { "name": "Admin", "email": "admin@gmail.com", "mobile": "99999999", "gender": "Male", "address": { "line1": "Noida sector 15", "line2": "Noida", "city": "Noida", "pincode": "201304" } };
    data.password = 'admin';
    data.role = "admin";
    db.users.insert(data, (err, newdoc) => {
        if (err) return ERROR(res, err);
        OK(res, newdoc);
    });
});

security.post("/login", (req, res) => {
   var localAuth =  passport.authenticate('local', function(err, user, info) {
        if (err) {
            ERROR(res, err)
        } else if (!user) {
            NOT_OK(res, info.message)
        } else {
            //setting users in session
            req.logIn(user, function(err) {
                if (err) { ERROR(res, err); } else {
                    // sending response to users
                    OK(res, user);
                }
            })
        }
    });

    localAuth(req,res);


});

module.exports = security;