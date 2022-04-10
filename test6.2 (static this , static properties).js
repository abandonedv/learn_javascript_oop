"use strict";

// static - принадлежит только классу и его насдедникам
// но не объектам

class Users {
    // static properties
    static countUsers = 0;

    constructor(name, old) {
        Users.countUsers++;
        this.name = name;
        this.old = old;
    }

    getName() { return this.name }

    static compareOld(user1, user2) {
        // в данном случае в this будет подставлен
        // класс из которого вызывается статический метод
        console.log(this === Admin)
        return user1.old === user2.old;
    }
}

class Admin extends Users {

    constructor(name, old, login, psw) {

        super(name, old);
        this.login = login;
        this.psw = psw;
    }

    static createAdmin(name, old) {
        // в данном случае в this будет подставлен
        // класс из которого вызывается статический метод
        return new this(name, old, "admin", "root");
    }
}

let u1 = new Users("Михаил", 19);
let u2 = new Users("Федор", 19, "aaa", "0123");
let u3 = Admin.createAdmin("Сергей", 33);
console.log(Users.compareOld(u1, u2));
console.log(Users.countUsers);
