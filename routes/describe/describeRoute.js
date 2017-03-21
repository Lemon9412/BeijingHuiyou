/**
 * Created by qiqi_ on 2017/3/21.
 */
var express = require("express");
var router = express.Router();

router.post("/",function(req,resp) {
    var user_id = req.body.user_id;
    var collection = database.collection("users");
    collection.find({_id: ObjectID(user_id)}).limit(1).next(function (err, data) {
        console.log(data);
        resp.send(data);
    });
});
module.exports=router;