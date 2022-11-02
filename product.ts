export class Product {
    private _id: number;
    private _name: string;
    private _category: string;
    private _price: number;
    private _quantity: number;
    private _date: string;
    private _desc: string;

    constructor(id: number, name: string, category: string, price: number, quantity: number, date: string, desc: string) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._price = price;
        this._quantity = quantity;
        this._date = date;
        this._desc = desc;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    get desc(): string {
        return this._desc;
    }

    set desc(value: string) {
        this._desc = value;
    }
}