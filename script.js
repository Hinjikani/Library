library = []

var dialog = document.querySelector("dialog")
var output = document.querySelector("output")
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let status = document.querySelector("#status");

function Book(name, author, pages, status) {
    this.id = crypto.randomUUID()
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.status = status;
}

function addBookToLibrary(name, author, pages, status) {
    let obj = new Book(name, author, pages, status)
    library.push(obj)
}

function addBookPopup() {
    dialog.showModal();
}

function closePopup() {
    dialog.close()
}

function showOutput() {
    let bookTitle = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value;
    let bookStatus = status.value;
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookStatus);
    dialog.close()
}