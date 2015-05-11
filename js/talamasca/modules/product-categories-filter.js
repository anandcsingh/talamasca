CORE.create_module("product-categories-filter", function (sb) {
    var me;
    var select;
    return {
        init: function () {
            me = this;
            select = sb.find("select")[0];
            sb.addEvent(select, "change", me.categoryChanged);
        },
        destroy: function () {
            sb.removeEvent(select, "change", me.categoryChanged);
            me = select = null;
        },
        categoryChanged: function (data) {
            sb.notify({
                type: 'category-changed',
                data: select.options[select.selectedIndex].text
            });
        }
    };
});