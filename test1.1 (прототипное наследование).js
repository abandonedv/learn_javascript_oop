"use strict";

// __proto__ - прототипное наследование

let geom = {
    name: "фигура",
    sp: {x: 0, y: 0},
    ep: {x: 100, y: 20}
};

let rect = {
    draw() {
        console.log("Прямоугольник: " +
            this.sp.x + "," +
            this.sp.y + "," +
            this.ep.x + "," +
            this.ep.y);
    }
};

rect.__proto__ = geom;

let info = {
    getInfo() {
        console.log(this.name);
    },
    __proto__: rect
}

info.getInfo(); // фигура