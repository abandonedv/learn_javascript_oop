"use strict";

let prop = {
    sp: {x: 0, y: 0},
    ep: {x: 100, y: 20},
    set coords(coords) {
        this.sp.x = coords[0];
        this.sp.y = coords[1];
        this.ep.x = coords[2];
        this.ep.y = coords[3];
    },
    get coords() {
        return [this.sp.x, this.sp.y, this.ep.x, this.ep.y];
    }
};

// create

let rect = Object.create(prop, {
    name: {value: "Прямоугольник", writable: true},
    draw: {value: function () {
        console.log("Фигура: " + this.name);
        }
    },
});

console.log(rect.coords);
rect.draw();

// getPrototypeOf & setPrototypeOf

console.log(Object.getPrototypeOf(rect) === prop); // true
Object.setPrototypeOf(rect, {});
console.log(Object.getPrototypeOf(rect) === prop); // false