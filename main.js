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
function countLines(text) {
    var count = 0;
    if (text) {
        for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
            var line = text_1[_i];
            if (line && line.length !== 0) {
                count = count + 1;
            }
        }
    }
    return count;
}
var a = countLines(["one", "two", "", "three"]);
var b = countLines(["hello", null, "world"]);
var c = countLines();
