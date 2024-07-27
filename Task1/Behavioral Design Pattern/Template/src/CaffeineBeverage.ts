abstract class CaffeineBeverage {
    public prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    protected boilWater(): void {
        console.log("Boiling water");
    }

    protected pourInCup(): void {
        console.log("Pouring into cup");
    }

    protected abstract brew(): void;
    protected abstract addCondiments(): void;
}

export { CaffeineBeverage };
