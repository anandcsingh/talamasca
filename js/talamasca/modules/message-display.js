CORE.create_module("message-display", function (sb) {
    var me;
    
    return {
        init: function () {
            me = this;
            sb.listen({
                'error-message': me.errorMessage,
                'info-message': me.errorMessage,
            });
        },
        destroy: function () {
            sb.ignore(['error-message', 'info-message']);
        },
        errorMessage: function (data) {
            alert(data);
        }
    };
});