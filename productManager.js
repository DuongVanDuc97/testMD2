"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.productList = [];
    }
    ProductManager.prototype.addProduct = function (product) {
        this.productList.push(product);
    };
    ProductManager.prototype.editProduct = function (id, product) {
        var index = this.findIndexByID(id);
    };
    ProductManager.prototype.showProductList = function () {
        if (!this.productList.length) {
            console.log("Không có dữ liệu");
        }
        else {
            this.productList.forEach(function (item) {
                console.log("\n                ID: ".concat(item.id, "\n                Name: ").concat(item.name, "\n                Categoty: ").concat(item.category, "\n                Price: ").concat(item.price, "\n                Quantity: ").concat(item.quantity, "\n                Date: ").concat(item.date, "\n                Description: ").concat(item.desc, "\n                "));
            });
        }
    };
    ProductManager.prototype.findByName = function (name) {
        var key = '';
        var result = this.productList.filter(function (product) { return String(product.name.toLowerCase().includes(String((key).toLowerCase()))); });
        if (result.length) {
            result.forEach(function (item) {
                console.log("\n                ID: ".concat(item.id, "\n                Name: ").concat(item.name, "\n                Category: ").concat(item.category, "\n                price: ").concat(item.price, "\n                Quantity: ").concat(item.quantity, "\n                "));
            });
        }
        else {
            console.log("Không có dữ liệu phù howpj");
        }
    };
    ProductManager.prototype.deleteProduct = function (id) {
        var duplicate = this.productList.find(function (product) { return product.id === id; });
        var index = this.findIndexByID(id);
        if (duplicate) {
            this.productList.splice(index, 1);
            console.log('Xoá thành công');
        }
        else {
            console.log('không tồn tại mặt hàng cần xoá');
        }
    };
    ProductManager.prototype.findIndexByID = function (id) {
        for (var i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id === id) {
                return i;
            }
        }
        return -1;
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
