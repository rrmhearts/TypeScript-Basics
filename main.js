"use strict";
class Greeter {
    constructor(n) {
        this.name = n;
    }
    sayHello() {
        console.log("Hello " + this.name);
    }
}
function sortByName(a) {
    var result = a.slice(0);
    result.sort((x, y) => {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByName([
    { name: "Ryan", age: 10 },
    { name: "Amy", age: 9 }
]);
