CORE.create_module("product-list", function (sb) {
    var me;
    var select;
    var products;

    function getProducts() {
        return [
            { name: "Audi A4", category: "Cars" },
            { name: "Mazda 323", category: "Cars" },
            { name: "Kawasaki Ninja 300", category: "Bikes" },
            { name: "Ducati Monster", category: "Bikes" },
            { name: "Reebok Nano 2.0", category: "Shoes" },
            { name: "Converse Chuck Taylor", category: "Shoes" }
        ];
    }

    function bindProducts(filter) {
        var filtered, product, option;
        var productIndex = 0;

        var addOption = function (str) {
            option = document.createElement("option");
            option.text = str;
            try {
                // for IE earlier than version 8
                select.add(option, x.options[null]);
            }
            catch (e) {
                select.add(option, null);
            }
        }
        select.options.length = 0;
        

        if (filter) {
            filtered = getProducts().filter(function (item) {
                return item.category == filter;
            });
        }
        else {
            filtered = getProducts();
        }

        addOption("Select a product");
        for (; productIndex < filtered.length; productIndex++) {
            product = filtered[productIndex];
            addOption(product.name);
        }
    }

    return {
        init: function () {
            me = this;
            select = sb.find("select")[0];
            
            sb.listen({
                'category-changed': me.categoryChanged
            });

            sb.addEvent(select, "change", me.productChanged);
        },
        destroy: function () {
            sb.removeEvent(select, "change", me.productChanged);
            me = select = null;
        },
        productChanged: function() {
            sb.notify({
                type: 'product-changed',
                data: select.options[select.selectedIndex].text
            });
        },
        categoryChanged: function (data) {
            bindProducts(data);
        }
    };
});