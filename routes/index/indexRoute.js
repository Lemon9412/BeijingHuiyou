/**
 * Created by qiqi_ on 2017/3/20.
 */
var express = require("express");
var router = express.Router();

router.post("/",function(req,resp) {
    var collection = database.collection("users");
    var info = collection.find().toArray();
    resp.send(info);
});
module.exports = router;