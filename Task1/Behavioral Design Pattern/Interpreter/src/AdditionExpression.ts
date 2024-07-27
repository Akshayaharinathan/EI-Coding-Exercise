import { Expression } from "./Expression";

class AdditionExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    public interpret(): number {
        return this.left.interpret() + this.right.interpret();
    }
}

export { AdditionExpression };
