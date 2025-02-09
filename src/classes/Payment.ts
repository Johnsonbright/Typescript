import { HardFormatter } from "../Interfaces/HardFormatter.js";

// classes
export class Payment  implements HardFormatter{
constructor(
readonly recipient: string,
private details: string,
public amount: number,
){}

format() {
    return `${this.recipient} is owed ${this.amount} for this ${this.details}.`
}
}