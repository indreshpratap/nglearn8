
var express = require('express');
var app = express();
var middlewares = require('./middlewares');
var path = require('path');
var adminRoutes = require('./admin.routes');
var userRoutes = require('./user.routes');
var securityRoutes = require('./security.routes');
var fs = require('fs');
var {isAdmin,isLoggedIn} = require('./session_check');

app.use("/",express.static(path.resolve(__dirname,"public/")));

middlewares(app);


app.get("/", (req, res) => {
   res.send(fs.readFileSync(path.resolve(__dirname,'public/index.html')));
});


app.use("/api",securityRoutes);
app.use('/api/admin',isAdmin, adminRoutes);
app.use('/api/user',isLoggedIn, userRoutes);





app.listen(3030, () => {
    console.log("server running at port 3030");
});