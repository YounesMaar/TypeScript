// Write Class Code Here
class Game<a, b = number> {
    public unary : a[] = []
    constructor(public title: a, public price: b) {

    }
    getDiscount(number: number | string) : void{
        console.log("Your discount is " + number)
    }
}

// Do Not Edit Here
let gameOne = new Game<string>("Ys", 100);
let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"