/**
 * Created by qiqi_ on 2017/3/20.
 */
var express = require("express");
var router = express.Router();

router.post("/", function (req, resp) {
    var collection = database.collection("users");
    collection.remove({cerNum: req.body.info_id});
    collection.find().toArray(function (err, docs) {
        resp.send(docs);
    });
    console.log(req.session.curUser);
});
module.exports = router;