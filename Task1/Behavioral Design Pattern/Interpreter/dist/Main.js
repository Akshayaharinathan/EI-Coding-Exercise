"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberExpression_1 = require("./NumberExpression");
const AdditionExpression_1 = require("./AdditionExpression");
const SubtractionExpression_1 = require("./SubtractionExpression");
// Represents the expression "5 + 3 - 2"
const expression = new SubtractionExpression_1.SubtractionExpression(new AdditionExpression_1.AdditionExpression(new NumberExpression_1.NumberExpression(5), new NumberExpression_1.NumberExpression(3)), new NumberExpression_1.NumberExpression(2));
console.log("Result:", expression.interpret()); // Output: Result: 6
