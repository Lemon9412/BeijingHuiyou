/**
 * Created by qiqi_ on 2017/3/22.
 */
var express = require("express");
var router = express.Router();


router.post("/", function (req, resp) {

    var param = JSON.parse(req.body.param);
    var username = param.username;
    var password = param.password;

    var collection = database.collection("login");
    var cursor = collection.find({username:username}).limit(1);
    cursor.next(function (error,user) {
        if(user != null) {
            if(user.password != password) {
                resp.send({state:1});
            } else {
                resp.send({state:2});
            }
        } else {
            resp.send({state:0});
        }
    });
});
module.exports = router;