import {ProductManager} from "./productManager";
import {Product} from "./product";

let input = require('readline-sync');
let manageProduct = new ProductManager()

function productMenu() {
    let productMenu = `
        ------MENU SẢN PHẨM------
        1.Thêm sản phẩm
        2.Sửa sản phẩm
        3.Xoá sản phẩm
        4.Hiển thị toàn bộ sản phẩm
        5.Tìm kiếm sản phẩm theo tên
        0.Thoát
        `;
    let choice;

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
                deleteProduct()
                break;
            case 4:
                manageProduct.showProductList();
                break;
            case 5:
                findProductByName();
                break;
        }
    } while (choice != 0)
}

function addProduct() {
    let id = +input.question('Nhập id sản phẩm: ');
    let name = input.question('Nhập tên sản phẩm: ');
    let quantity = +input.question('Nhập số lượng sản phẩm: ');
    let date = new Date().toLocaleString();
    let price = +input.question('Nhập giá sản phẩm: ');
    let category = input.question('Nhập loại sản phẩm: ');
    let desc = input.question('Nhập mô tả sản phẩm: ');
    let product: Product = new Product(id, name, category, price, quantity, date, desc)
    manageProduct.addProduct(product)
}

function editProduct() {
    let id = +input.question('Nhập id sản phẩm: ');
    let name = input.question('Nhập tên sản phẩm: ');
    let quantity = +input.question('Nhập số lượng sản phẩm: ');
    let date = new Date().toLocaleString();
    let price = +input.question('Nhập giá sản phẩm: ');
    let category = input.question('Nhập loại sản phẩm: ');
    let desc = input.question('Nhập mô tả sản phẩm: ');
    let product: Product = new Product(id, name, category, price, quantity, date, desc)
    manageProduct.editProduct(id, product)
}

function deleteProduct() {
    let id = +input.question('Nhập id sản phẩm: ');
    manageProduct.deleteProduct(id)
}

function findProductByName() {
    let name = input.question('Nhập tên cần tìm: ')
    manageProduct.findByName(name)
}
productMenu();