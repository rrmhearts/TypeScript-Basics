interface Person {
    name: string;
    age: number;
}

class Greeter {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    sayHello() {
        console.log("Hello " + this.name);
    }
}

function sortByName(a: Person[]) {
    var result = a.slice(0);
    result.sort((x, y) => {
        return x.name.localeCompare(y.name);
    });
    return result;
}

sortByName([
    {name: "Ryan", age: 10},
    {name: "Amy", age: 9}
]);

function countLines (text?: (string|null)[]): number {
    let count: number = 0;
    if (text) {
        for (const line of text) {
            if (line && line.length !== 0) {
                count = count + 1;
            }
        }
    }
    return count;
}

let a = countLines(["one", "two", "", "three"]);
let b = countLines(["hello", null, "world"]);
let c = countLines();


abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(public w: number, public h: number) {
        super();
    }
    getArea() {
        return this.w * this.h;
    }
}

class Square extends Rectangle {
    constructor (public size: number) {
        super(size, size);
    }
}

const shape: Shape = new Circle(10);
const area = shape.getArea();