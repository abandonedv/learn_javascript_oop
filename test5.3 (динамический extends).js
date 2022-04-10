"use strict";

function getExtends(type) {
    return class  {
        constructor(sp, ep, width, color) {
            this.type = type;
            this.width = width;
            this.color = color;
        }
    };
}

class Line extends getExtends("3d") {
    draw() {
        console.log("Линия: " +
            this.sp.x + ", " +
            this.sp.y + ", " +
            this.ep.x + ", " +
            this.ep.y + ", ");
    }
}

let l1 = new Line({x: 0, y: 0}, {x: 10, y: 20}, 1, "red");
console.log(l1); // Line { type: '3d', width: { x: 0, y: 0 }, color: { x: 10, y: 20 } }