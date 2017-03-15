/**
 * Created by qiqi_ on 2017/3/15.
 */
var express = require("express");
var router = express.Router();
var dao = require("./../../dao/indexDao.js");
var co = require("co");


router.post("/index",function(req,resp) {
    co(function *() {
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

        var info = yield dao.findInfoByIDcard(IDcard);
        console.log("qiqi");
        if(info!=null) {
            resp.send({state:1});
        } else {
            yield dao.insertInfo({photo:photo,name:name,male:male,female:female,birthday:birthday,num:num,IDcard:IDcard,cerName:cerName,cerday:cerday,company:company});
            var curInfo = yield dao.findInfoByIDcard(IDcard);
            req.session.curInfo = info;
            resp.send({state:2});
        }
    }).catch(function(e) {
        resp.send({state:0});
    });
});
module.exports = router;