console.log('start');

class Bar {
    constructor() {
        console.log('bar');
    }
}
function bar() {
    new Bar();
}
function foo() {
    console.log('foo');
    bar();
}

foo();
console.log('end');
