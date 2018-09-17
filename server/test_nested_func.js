function firstBlock(a, b) {
    return function(x, y) {
        console.log("a", a);
        console.log("b", b);
        console.log("x", x);
        console.log("y", y);
    }
}

//firstBlock(1, 2)(3, 4);

var fb = firstBlock(10, 20);
fb(11, 22);

fb(33, 44);