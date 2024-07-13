"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
// public, private and read only
class Invoice {
    //   readonly  client: string;
    //    private details: string;
    //     public amount: number;
    //readonly allows us  read value inside or outside the class but we cant change it.
    //private allows us to read and change inside of the class
    //public allows us to read and change outdienthe class
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
exports.Invoice = Invoice;
