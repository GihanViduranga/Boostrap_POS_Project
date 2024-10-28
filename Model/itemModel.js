export default class ItemModel{
    constructor(id,itemName,itemDescription,qty,price) {
        this._id = id;
        this._itemName = itemName;
        this._qty = qty;
        this._itemDescription = itemDescription;
        this._price = price;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get itemDescription() {
        return this._itemDescription;
    }

    set itemDescription(value) {
        this._itemDescription = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}