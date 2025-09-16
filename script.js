// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for demonstration
    if (username === 'admin' && password === 'password') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('lmsPage').style.display = 'block';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function displayBooks() {
    // Placeholder function for displaying books
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '<p>Book 1</p><p>Book 2</p>';
}

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.is_checked_out = false;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        return `Book '${book.title}' added to the library.`;
    }

    removeBook(isbn) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isbn === isbn) {
                let removedBook = this.books.splice(i, 1)[0];
                return `Book '${removedBook.title}' removed from the library.`;
            }
        }
        return "Book not found.";
    }

    checkOutBook(isbn) {
        for (let book of this.books) {
            if (book.isbn === isbn) {
                if (!book.is_checked_out) {
                    book.is_checked_out = true;
                    return `Book '${book.title}' checked out.`;
                } else {
                    return `Book '${book.title}' is already checked out.`;
                }
            }
        }
        return "Book not found.";
    }

    returnBook(isbn) {
        for (let book of this.books) {
            if (book.isbn === isbn) {
                if (book.is_checked_out) {
                    book.is_checked_out = false;
                    return `Book '${book.title}' returned.`;
                } else {
                    return `Book '${book.title}' was not checked out.`;
                }
            }
        }
        return "Book not found.";
    }

    displayBooks() {
        if (this.books.length === 0) {
            return "No books in the library.";
        }
        let bookList = "";
        for (let book of this.books) {
            let status = book.is_checked_out ? "Checked out" : "Available";
            bookList += `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Status: ${status}<br>`;
        }
        return bookList;
    }

    findBook(isbn) {
        for (let book of this.books) {
            if (book.isbn === isbn) {
                let status = book.is_checked_out ? "Checked out" : "Available";
                return `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Status: ${status}`;
            }
        }
        return "Book not found.";
    }
}

const library = new Library();

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('addBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);
    alert(library.addBook(book));
    this.reset();
});

document.getElementById('removeBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const isbn = document.getElementById('removeIsbn').value;
    alert(library.removeBook(isbn));
    this.reset();
});

document.getElementById('checkOutBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const isbn = document.getElementById('checkOutIsbn').value;
    alert(library.checkOutBook(isbn));
    this.reset();
});

document.getElementById('returnBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const isbn = document.getElementById('returnIsbn').value;
    alert(library.returnBook(isbn));
    this.reset();
});

function displayBooks() {
    document.getElementById('bookList').innerHTML = library.displayBooks();
}

document.getElementById('findBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const isbn = document.getElementById('findIsbn').value;
    document.getElementById('foundBook').innerHTML = library.findBook(isbn);
    this.reset();
});
