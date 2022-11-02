"use strict";
exports.__esModule = true;
var productManager_1 = require("./productManager");
var product_1 = require("./product");
var input = require('readline-sync');
var manageProduct = new productManager_1.ProductManager();
function productMenu() {
    var productMenu = "\n        ------MENU S\u1EA2N PH\u1EA8M------\n        1.Th\u00EAm s\u1EA3n ph\u1EA9m\n        2.S\u1EEDa s\u1EA3n ph\u1EA9m\n        3.Xo\u00E1 s\u1EA3n ph\u1EA9m\n        4.Hi\u1EC3n th\u1ECB to\u00E0n b\u1ED9 s\u1EA3n ph\u1EA9m\n        5.T\u00ECm ki\u1EBFm s\u1EA3n ph\u1EA9m theo t\u00EAn\n        0.Tho\u00E1t\n        ";
    var choice;
    do {
        console.log(productMenu);
        choice = +input.question('Nhập lựa chọn của bạn: ');
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                editProduct();
                break;
            case 3:
                deleteProduct();
                break;
            case 4:
                manageProduct.showProductList();
                break;
            case 5:
        }
    } while (choice != 0);
}
function addProduct() {
    var id = +input.question('Nhập id sản phẩm: ');
    var name = input.question('Nhập tên sản phẩm: ');
    var quantity = +input.question('Nhập số lượng sản phẩm: ');
    var date = new Date().toLocaleString();
    var price = +input.question('Nhập giá sản phẩm: ');
    var category = input.question('Nhập loại sản phẩm: ');
    var desc = input.question('Nhập mô tả sản phẩm: ');
    var product = new product_1.Product(id, name, category, price, quantity, date, desc);
    manageProduct.addProduct(product);
}
function editProduct() {
    var id = +input.question('Nhập id sản phẩm: ');
    var name = input.question('Nhập tên sản phẩm: ');
    var quantity = +input.question('Nhập số lượng sản phẩm: ');
    var date = new Date().toLocaleString();
    var price = +input.question('Nhập giá sản phẩm: ');
    var category = input.question('Nhập loại sản phẩm: ');
    var desc = input.question('Nhập mô tả sản phẩm: ');
    var product = new product_1.Product(id, name, category, price, quantity, date, desc);
    manageProduct.editProduct(id, product);
}
function deleteProduct() {
    var id = +input.question('Nhập id sản phẩm: ');
    manageProduct.deleteProduct(id);
}
productMenu();
