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

/*
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
*/
type Shape = 
    { kind: "circle", radius: number } |
    { kind: "rectangle", w: number, h: number } |
    { kind: "square", size: number };

function assertNever(obj: never) {
    throw new Error("Unexpected object");
}
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.w * shape.h;
        case "square":
            return shape.size ** 2;
    }
    //shape; // shape type is never!! because all cases handled
    assertNever(shape);
    //throw new Error("Invalid Shape");
}
const shape: Shape = { kind: "circle", radius: 10 };
const area = getArea(shape);