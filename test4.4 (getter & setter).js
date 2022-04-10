"use strict";

// getter & setter

class Book {
    npages = 123;

    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    getTitle() { return this.title; }
    setPrice(pr) { this.price = pr }

    get priceBook() { return this.price };
    set priceBook(t) {
        console.log("setter")
        this.price = t;
    };
}

let book = new Book("Война и мир", "Толстой", 200);
book.priceBook = 250;
console.log(book);