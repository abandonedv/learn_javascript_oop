"use strict";

// get & set

let geom = {
    name: "Фигура",
    sp: {x: 0, y: 0},
    ep: {x: 100, y: 20},
    get nameGeom() {return this.name;},
    set nameGeom(name) {this.name = name;},
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

console.log(rect.nameGeom); // get
rect.nameGeom = "Прямоугольник"; // set
console.log(rect.nameGeom);

console.log("...")

// hasOwnProperty

for(let prop in rect)
    if (rect.hasOwnProperty(prop))
        console.log(prop + ": " + rect[prop]);

/*
draw: draw() {
        console.log("Прямоугольник: " +
            this.sp.x + "," +
            this.sp.y + "," +
            this.ep.x + "," +
            this.ep.y);
    }
name: Прямоугольник
 */

console.log("...")

// если менять свойство не целиком, а только свойства обьекта этого свойства
// то изменения произойдут именно в родительском объекте

let my_coords = [1, 2, 3, 4];
rect.coords = my_coords;
console.log(geom.coords) // [ 1, 2, 3, 4 ]