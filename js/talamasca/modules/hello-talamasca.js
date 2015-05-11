CORE.create_module("hello-talamasca", function (sb) {
    var me;
    var inputTxt, btn;
    return {
        init: function () {
            me = this;
            inputTxt = sb.find("#helloTxt")[0];
            btn = sb.find("#helloBtn")[0];
            sb.addEvent(btn, "click", me.hello);
        },
        destroy: function () {
            sb.removeEvent(btn, "click", me.hello);
            me = inputTxt = btn = null;
        },
        hello: function (data) {
            var helloMsg = "Greetings " + inputTxt.value + " from the talamsca";
            sb.notify({
                type: 'info-message',
                data: helloMsg
            });
        }
    };
});