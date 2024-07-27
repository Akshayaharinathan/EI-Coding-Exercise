import { Coffee } from "./Coffee";
import { Tea } from "./Tea";

const coffee = new Coffee();
const tea = new Tea();

console.log("Preparing coffee:");
coffee.prepareRecipe();

console.log("\nPreparing tea:");
tea.prepareRecipe();
