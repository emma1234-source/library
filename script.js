const myLibrary = [];

function Book(title, author, pages, isRead) {
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.page = pages;
    this.readStatus = isRead ? "read" : "not read"; //this is a ternary operator (condition ? valueIfTrue : valueIfFalse)

};

