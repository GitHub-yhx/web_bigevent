$(function () {
    // 去注册
    $("#link-reg").on("click", function () {
        $(".login-box").hide();
        $(".reg-box").show();
    })

    // 去登录
    $("#link-login").on("click", function () {
        $(".reg-box").hide();
        $(".login-box").show();
    })

    // 配置自定义规则
    layui.form.verify({
        pwd: [/^\S{6,12}$/, '密码长度必须为6到12位，且不能为空格'],

        repwd: function (value) {
            // 函数形参 拿到的是 这个元素当前所在那个元素中 输入的值
            const password = $("#pwd").val();
            if (password !== value) {
                return "两次密码不一致";
            }
        }
    })
})