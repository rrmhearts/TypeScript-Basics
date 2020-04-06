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