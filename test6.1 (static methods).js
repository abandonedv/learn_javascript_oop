"use strict";

class Users {
    constructor(name, old) {
        this.name = name;
        this.old = old;
    }

    getName() { return this.name }

    static compare(user1, user2) {
        return user1.old === user2.old;
    }
}

let user1 = new Users("vadim", 18);
let user2 = new Users("misha", 18);

console.log(Users.compare(user1, user2))