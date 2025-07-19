library = []

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

