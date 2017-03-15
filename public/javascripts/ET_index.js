/**
 * Created by qiqi_ on 2017/3/15.
 */
(function() {
    ET_index = {
        index:function() {
            var info = {
                type:"post",
                url:"/index",
                dataType:"json",
                success:BUS_index.afterSub
            };
            $("#usercers").ajaxForm(info);
        },
        showError:function(domObj) {
            domObj.select();
            domObj.focus();
        }
    };
    ET_index.index();
})();