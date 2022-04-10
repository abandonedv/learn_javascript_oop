"use strict";

// instanceof

class A {}

class B {}

let a =  new A();
console.log(a instanceof A); // true
console.log(a instanceof B); // false