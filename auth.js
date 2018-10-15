var express = require("express");
var passport = require("passport");
var users = require("./data/users.json");
var router = express.Router();
var _ = require("lodash");

module.exports = router;

router.get("/login", function(req, res){
    // if(req.app.get("env") ==="development"){
    //     var user = users[0];
    //     //localhost:3000/login?user=pax
    //     if(req.query.user){
    //         user = _.find(users, u=>u.name === req.query.user)
    //     }
    //     req.logIn(user, function(err){
    //         if(err){
    //             return next(err);
    //         }
    //         return res.redirect('/');
    //     });
    //     return;
    // }
    res.render("login");
});

router.post("/login", passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect:'/login'
}));

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/login");
});