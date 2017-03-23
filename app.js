var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var ejs = require('ejs');
var app = express();

var addRoute = require("./routes/add/addRoute.js");
var indexRoute = require("./routes/index/indexRoute.js");
var describeRoute = require("./routes/describe/describeRoute.js");
var loginRoute = require("./routes/login/loginRoute.js");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
    cookie: {maxAge: 1800000},
    name: "mySession",
    resave: true,
    secret: 'keyboard cat',
    saveUninitialized: false
}));

//设定mongodb的配置项信息
var client = require('mongodb').MongoClient;
//设定客户端连接数据库的地址端口，用户名、密码等，在回调函数中返回database对象
client.connect("mongodb://127.0.0.1:27017/huiyou", function (error, database) {
    if (error) throw error;
    //将数据库对象加入到全局执行环境中，以便其他文件调用。
    global.database = database;
    global.ObjectID = require('mongodb').ObjectID;
    console.log("连接成功！");
});
app.use("/login", loginRoute);
app.use("/describe", describeRoute);
app.use("/add", addRoute);
app.use("/", indexRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
