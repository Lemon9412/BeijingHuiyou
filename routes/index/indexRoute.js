/**
 * Created by qiqi_ on 2017/3/20.
 */
var express = require("express");
var router = express.Router();


router.post("/", function (req, resp) {
    if (req.session.curUser) {
        var collection = database.collection("users");
        collection.remove({cerNum: req.body.info_id});
        collection.find().toArray(function (err, docs) {
            resp.send(docs);
        });
    } else {
        var info = ({
            username: "huiyou@xuweiping",
            password: "13760496256",
        });
        var collection = database.collection("login");
        collection.insert(info, function (err, state) {
            if (err) {
                alert("提交失败");//失败的话给用户个提示
                resp.send("-1");
            } else {
                resp.send({state: 1});
            }
        });
    }
});

router.post("/logout", function (req, res, next) {
    req.session.curUser = null;
    req.session.destroy();
    res.send("1");
});

module.exports = router;