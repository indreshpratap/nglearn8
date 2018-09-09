var Router = require('express').Router;
var db = require('./dao');
var { OK, ERROR } = require('./route.helper');
var security = new Router();

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
    let body = req.body;
    
    db.users.findOne(body, (err, doc) => {
        if (err) return ERROR(res, err);
        if (doc && doc._id) {
            let user = {
                name: doc.name,
                role: doc.role
            }
            OK(res, user);
        } else {
            res.json({ status: false, error: "Invalid username or password" });
        }
    })
});

module.exports = security;