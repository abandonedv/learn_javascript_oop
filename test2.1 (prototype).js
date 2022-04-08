"use strict";

// prototype

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

// функция - конструктор
function Rect() {
    this.name = "прямоугольник";

    this.draw = function () {
        console.log("Фигура: " + this.name);
    };
}

// лучше выполнять наследование через prototype именно так
Rect.prototype.__proto__ = prop;

let r = new Rect();

// если попробовать пронаследовать через prototype после создания объекта
// то просто создасться атрибут с именем prototype

r.prototype = "abc";

for(let p in r)
    console.log(p);
/*
name
draw
prototype
sp
ep
coords  
 */

console.log(Rect.prototype);