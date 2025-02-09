import { HardFormatter } from "../Interfaces/HardFormatter.js";

// classes
export class Invoice  implements HardFormatter{
constructor(
readonly client: string,
private details: string,
public amount: number,
){}

format() {
    return `${this.client} owes ${this.amount} for this ${this.details}`
}
}