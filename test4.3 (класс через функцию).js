"use strict";

function createFruit() {
    return class {
        constructor(name, weight) {
            this.name = name;
            this.weight = weight;
        }

        showInfo() { console.log(this.name + " " + this.weight) };
    }
}

let MY_FRUIT = createFruit();
let my_fr = new MY_FRUIT("apple", 50);
my_fr.showInfo(); //apple 50