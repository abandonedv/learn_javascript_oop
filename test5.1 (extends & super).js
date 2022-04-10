"use strict";

// extends & super

class Prop {
    constructor(width, color) {
        this.width = width;
        this.color = color;
    }

    getColor(){
        return this.color;
    }
}

class Line extends Prop {
    constructor(sp, ep, width, color) {
        super(width, color);
        this.sp = sp;
        this.ep = ep;
    }

    getColor() {
        let color = super.getColor();
        return "[" + color + "]";
    }

    draw() {
        console.log("Линия: " +
                    this.sp.x + ", " +
                    this.sp.y + ", " +
                    this.ep.x + ", " +
                    this.ep.y + ", ");
    }
}

let l1 = new Line({x: 0, y: 0}, {x: 10, y: 20}, 1, "red");
console.log(l1);
/*
Line {
  width: 1,
  color: 'red',
  sp: { x: 0, y: 0 },
  ep: { x: 10, y: 20 }
}
 */
console.log(l1.getColor()) // [red]
