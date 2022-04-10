"use strict";

class Users {
    // # - строгое private
    #name;
    #old = 0;

    constructor(name, old) {
        this.#name = name;
        this.#old = old;
    }

    _getName() { return this.#name; }

    getName() { return this.#name; }
}

class Admin extends Users{
    constructor(name, old, login, psw) {
        super(name, old);
        this._login = login;
        this._psw = psw;
    }
}

let u1 = new Admin("Михаил", 19, "admin", "root");
let u2 = new Users("Кирилл", 22);
console.log(u1.getName()); // Михаил
console.log(u2.getName()); // Кирилл

