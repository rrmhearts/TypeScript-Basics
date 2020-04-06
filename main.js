"use strict";
var Greeter = /** @class */ (function () {
    function Greeter(n) {
        this.name = n;
    }
    Greeter.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Greeter;
}());
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByName([
    { name: "Ryan", age: 10 },
    { name: "Amy", age: 9 }
]);
