"use strict";

// class

class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    getTitle() { return this.title; }
    setPrice(pr) { this.price = pr }
}

let book1 = new Book("Муму", "Тургенев", 112);
console.log(book1);
console.log(typeof Book); // function