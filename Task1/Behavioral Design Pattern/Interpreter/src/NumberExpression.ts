import { Expression } from "./Expression";

class NumberExpression implements Expression {
    private number: number;

    constructor(number: number) {
        this.number = number;
    }

    public interpret(): number {
        return this.number;
    }
}

export { NumberExpression };
