"use strict";

// если конструктор в классе не реализован
// то генерируется автоматически в виде
/*
constructor(...args) {
    super(...args);
}
 */

class Prop {
    constructor(sp, ep, width, color) {
        this.width = width;
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

class Line extends Prop {
    draw() {
        console.log("Линия: " +
            this.sp.x + ", " +
            this.sp.y + ", " +
            this.ep.x + ", " +
            this.ep.y + ", ");
    }
}

let l1 = new Line({x: 0, y: 0}, {x: 10, y: 20}, 1, "red");
console.log(l1); // Line { width: 1, color: 'red' }