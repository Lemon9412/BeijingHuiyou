/**
 * Created by qiqi_ on 2017/3/20.
 */
/**
 * Created by qiqi_ on 2017/3/15.
 */
var express = require("express");
var router = express.Router();

router.post("/", function (req, resp) {
    var name = req.body.name;
    var sex = req.body.sex;
    var birthday = req.body.birthday;
    var cerNum = req.body.cerNum;
    var IDcard = req.body.IDcard;
    var cerName = req.body.cerName;
    var cerday = req.body.cerday;
    var company = req.body.company;
    var info = ({
        name: name,
        sex: sex,
        birthday: birthday,
        cerNum: cerNum,
        IDcard: IDcard,
        cerName: cerName,
        cerday: cerday,
        company: company
    });
    var collection = database.collection("users");
    collection.insert(info, function (err) {
        if(err){
            alert("提交失败");//失败的话给用户个提示
        }
    });
});
module.exports = router;