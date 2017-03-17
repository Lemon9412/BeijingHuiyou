/**
 * Created by qiqi_ on 2017/3/15.
 */
var express = require("express");
var router = express.Router();


router.post("/",function(req,resp) {
        var photo = req.body.photo;
        var name = req.body.name;
        var male = req.body.male;
        var female = req.body.female;
        var birthday = req.body.birthday;
        var num = req.body.num;
        var IDcard = req.body.IDcard;
        var cerName = req.body.cerName;
        var cerday = req.body.cerday;
        var company = req.body.company;
        var info = {
            photo:photo,
            name:name,
            male:male,
            female:female,
            birthday:birthday,
            num:num,
            IDcard:IDcard,
            cerName:cerName,
            cerday:cerday,
            company:company
        };
        var colletion = database.collection("users");
        colletion.insert(info);
});
module.exports = router;