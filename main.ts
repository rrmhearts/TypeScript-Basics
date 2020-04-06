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

function countLines (text?: string[]): number {
    let count: number;
    for (const line of text) {
        if (line.length !== 0) {
            count = count + 1;
        }
    }
    return count;
}

let a = countLines(["one", "two", "", "three"]);
let b = countLines(["hello", null, "world"]);
let c = countLines();