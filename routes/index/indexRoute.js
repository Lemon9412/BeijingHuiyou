/**
 * Created by qiqi_ on 2017/3/15.
 */
var express = require("express");
var router = express.Router();

router.post("/",function(req,resp) {
        var photo = req.body.photo;
        var name = req.body.name;
        var sex = req.body.sex;
        var birthday = req.body.birthday;
        var num = req.body.num;
        var IDcard = req.body.IDcard;
        var cerName = req.body.cerName;
        var cerday = req.body.cerday;
        var company = req.body.company;
        var info = ({photo:photo, name:name,sex:sex,birthday:birthday, num:num, IDcard:IDcard, cerName:cerName, cerday:cerday, company:company});
        var collection = database.collection("users");
        collection.insert(info);



});
module.exports = router;