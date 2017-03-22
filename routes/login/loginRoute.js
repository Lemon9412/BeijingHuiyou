/**
 * Created by qiqi_ on 2017/3/22.
 */
var express = require("express");
var router = express.Router();


router.post("/", function (req, resp) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username,password);
    var collection = database.collection("login");
    collection.find({username:username,password:password}).next(function (err, docs) {
        resp.send(docs);
    });
});
module.exports = router;