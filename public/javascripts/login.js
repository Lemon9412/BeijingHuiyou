/**
 * Created by jingwei on 17/3/17.
 */

$(document).ready(function () {

    $("#alert_id").hide();
    $("#alert_password").hide();



    $("#btn_cancel").click(function () {
        $(location).attr('href', '/bibased');
    })

    $("#btn_login").click(function () {
        if ($("#username").val() === '') {
            $("#alert_id").fadeIn(700).text("账号不能为空")
        } else {
            $("#alert_id").slideUp(700);
        }
    })

    $("#btn_login").click(function () {
        if ($("#password").val() === '') {
            $("#alert_password").fadeIn(700).text("密码不能为空")
        } else {
            $("#alert_password").slideUp(700);
        }
    })
    $("#btn_login").click(function () {
        var options = {
            username:$("#username").val(),
            password:$("#password").val()
        };
        $.post("/login", {param:JSON.stringify(options)}, function (data) {
            if(data.state==0) {
                alert("用户名错误");
            } else if (data.state==1) {
                alert("密码错误");
            } else {
                window.location.href="index.html";
            }
        });
    });

});