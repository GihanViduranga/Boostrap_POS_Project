export default class OrderModel{
    constructor(orderId,date,orderQty,Total) {
        this._orderId = orderId;
        this._date = date;
        this._orderQty = orderQty;
        this._total = Total;
        this._Total = Total;
    }

    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get orderQty() {
        return this._orderQty;
    }

    set orderQty(value) {
        this._orderQty = value;
    }

    get Total() {
        return this._Total;
    }

    set Total(value) {
        this._Total = value;
    }
}