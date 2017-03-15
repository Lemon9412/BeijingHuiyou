/**
 * Created by qiqi_ on 2017/3/15.
 */
var com = require('./../common/common.js');

exports.findUserByInfo = function(IDcard) {
    return mongodb.collection("users").find({IDcard:IDcard}).limit(1).next();
}
exports.insertInfo = function(info) {
    return mongodb.collection("users").insert(info);
}