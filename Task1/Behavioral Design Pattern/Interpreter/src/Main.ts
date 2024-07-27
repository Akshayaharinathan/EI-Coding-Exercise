import { NumberExpression } from "./NumberExpression";
import { AdditionExpression } from "./AdditionExpression";
import { SubtractionExpression } from "./SubtractionExpression";

// Represents the expression "5 + 3 - 2"
const expression = new SubtractionExpression(
    new AdditionExpression(
        new NumberExpression(5),
        new NumberExpression(3)
    ),
    new NumberExpression(2)
);

console.log("Result:", expression.interpret()); // Output: Result: 6
