function test(s) {
    if (s) {
        s;
    }
    else {
        s; // you might have a "" string down here...
    }
    if (typeof s === 'object') {
        s; // type of null is object...
    }
    else {
        s;
    }
    if (typeof s == undefined) {
        s; // could be null or undefined unless ===
    }
    else {
        s;
    }
    if (typeof s === 'undefined') {
        s;
    }
    else {
        s;
    }
}
