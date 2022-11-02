import {Product} from "./product";

export class ProductManager {
    productList: Product[] = [];

    addProduct(product: Product): void {
        this.productList.push(product)
    }

    editProduct(id: number, product: Product) {
        let index = this.findIndexByID(id);
        this.productList[index] = product;
    }

    showProductList() {
        if (!this.productList.length) {
            console.log("Không có dữ liệu")
        } else {
            this.productList.forEach(item => {
                console.log(`
                ID: ${item.id}
                Name: ${item.name}
                Categoty: ${item.category}
                Price: ${item.price}
                Quantity: ${item.quantity}
                Date: ${item.date}
                Description: ${item.desc}
                `)
            })
        }
    }

    findByName(name: string) {

        let result: Product[] = this.productList.filter(product => String(product.name.toLowerCase().includes(String((name).toLowerCase()))))
        if (result.length) {
            result.forEach(item => {
                console.log(`
                ID: ${item.id}
                Name: ${item.name}
                Category: ${item.category}
                price: ${item.price}
                Quantity: ${item.quantity}
                `)
            })
        } else {
            console.log("Không có dữ liệu phù howpj")
        }
    }

    deleteProduct(id: number) {
        let duplicate = this.productList.find(product => product.id === id)
        let index = this.findIndexByID(id)
        if (duplicate) {
            this.productList.splice(index, 1)
            console.log('Xoá thành công')
        } else {
            console.log('không tồn tại mặt hàng cần xoá')
        }
    }

    findIndexByID(id) {
        for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id === id) {
                return i
            }
        }
        return -1;
    }

}