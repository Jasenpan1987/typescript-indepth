"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var shelf_1 = require("./shelf");
function getAllBooks() {
    var books = [
        { id: 1, title: "Node JS Guide", author: "justjavac", available: true, category: enums_1.Category.Biography },
        { id: 2, title: "Introduction to react", author: "facebook", available: true, category: enums_1.Category.Fiction },
        { id: 3, title: "How to use firebase", author: "google", available: false, category: enums_1.Category.Poetry }
    ];
    return books;
}
function logFirstAvailable(books) {
    var numberOfBooks = books.length;
    var bookAvailable = "";
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.available) {
            bookAvailable = book.title;
            break;
        }
    }
    console.log("Total number of books: " + numberOfBooks);
    console.log("First book available: " + bookAvailable);
}
function getBookById(id) {
    return getAllBooks().find(function (book) { return book.id === id; });
}
function getBookTitlesByCategory(category) {
    if (category === void 0) { category = enums_1.Category.Fiction; }
    console.log("Getting books with category " + category + " (" + enums_1.Category[category] + ")");
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book.category === category; }).map(function (book) { return book.title; });
}
function logBookTitles(titleArr) {
    titleArr.forEach(function (title) { return console.log("Title: " + title); });
}
function createCustomerId(id, name) {
    return id + name;
}
function createCustomer(name, age, city) {
    console.log(name);
    age && console.log(age);
    city && console.log(city);
}
function checkoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    return getAllBooks()
        .filter(function (book) { return bookIds.indexOf(book.id) !== -1; })
        .map(function (book) { return book.title; });
}
function getBookTitles(filterProperty) {
    if (typeof filterProperty === 'string') {
        return getAllBooks()
            .filter(function (book) { return book.author === filterProperty; })
            .map(function (book) { return book.title; });
    }
    else if (typeof filterProperty === 'boolean') {
        return getAllBooks()
            .filter(function (book) { return book.available === filterProperty; })
            .map(function (book) { return book.title; });
    }
}
/******************************************************************************************/
var inventory = [
    { id: 1, title: "Node JS Guide", author: "justjavac", available: true, category: enums_1.Category.Biography },
    { id: 2, title: "Introduction to react", author: "facebook", available: true, category: enums_1.Category.Fiction },
    { id: 3, title: "How to use firebase", author: "google", available: false, category: enums_1.Category.Poetry }
];
var mag = [
    { title: "Coding every month", publisher: "Packt" },
    { title: "Awesome JS", publisher: "Packt" },
    { title: "New Node", publisher: "Orally" }
];
var bookShelf = new shelf_1.default(); // bookshelf with Book
inventory.forEach(function (book) { return bookShelf.add(book); });
console.log(bookShelf.getFirst().title);
var magShelf = new shelf_1.default(); // bookshelf with Magazine
mag.forEach(function (m) { return magShelf.add(m); });
console.log(magShelf.getFirst().title);
// generic function
// const inventory: Array<Book> = [
//     { id: 1, title:"Node JS Guide", author: "justjavac", available: true, category: Category.Biography },
//     { id: 2, title: "Introduction to react", author: "facebook", available: true, category: Category.Fiction },
//     { id: 3, title: "How to use firebase", author: "google", available: false, category: Category.Poetry }
// ];
// const purgedInventory = purge<Book>(inventory); // gives Book to T during the invokation
// purgedInventory.forEach((book: Book) => console.log(book.title));
// const numbers = [1, 2, 3, 4, 5];
// const purgedNumber: Array<number> = purge<number>(numbers);
// console.log(purgedNumber);
// class literal
// const Newspaper = class extends ReferenceItem {
//     printCitation() {
//         console.log(`Citation from a newspaper ${this.title}`);
//     }
// }
// let australian = new Newspaper("The Australian", 2017);
// australian.printItem();
// australian.printCitation();
// abstract class
// const encyclopediaBook = new Encyclopedia("World Encyc", 1999, 3);
// encyclopediaBook.printItem();
// encyclopediaBook.printCitation();
// const ref: ReferenceItem = new ReferenceItem("Foo Item", 1986); // error, can't instantiate abstract class
// ref.printItem();
// ref.publisher = "Random Publisher";
// console.log(ref.publisher);
// let faviorateLibrarian: Librarian;
// faviorateLibrarian = new UniLibrarian();
// faviorateLibrarian.name = "Foo";
// faviorateLibrarian.assistCustomer("Bar");
// const faviorateAuthor: Author = {
//     name: "Foo",
//     email: "foo@gmail.com",
//     numBooksPublished: 10
// };
// const UTSLibrarian: Librarian = {
//     name: "Bar",
//     email: "bar@gmail.com",
//     department: "UTS building 5",
//     assistCustomer: function(name){
//         console.log(this.name + " is helping " + name);
//     }
// }
// const myBook: Book = {
//     id: 9,
//     title: "Random book",
//     author: "Foo",
//     category: Category.Children,
//     available: true,
//     // foo: bar, // you can't have additional properties beyond the interface defination if the object marked
//                  // as an implementation of the interface, however, you can have it if it is not marked
//     markDamaged: function (reason: string) {
//         console.log("damanged because " + reason);
//     }
// }
// let reportDamage: DamageLogger;
// reportDamage = (reason: string) => console.log("To Admin: a book is damanged " + reason);
// reportDamage("coffee stains");
// function overloading
// const facebookBookTitles = getBookTitles('facebook');
// logBookTitles(facebookBookTitles);
// const availableBookTitles = getBookTitles(true);
// logBookTitles(availableBookTitles);
// rest parameters
// const johnBooks = checkoutBooks("John", 1, 2);
// logBookTitles(johnBooks);
// default parameters
// const allFictionBookTitles = getBookTitlesByCategory();
// const allPoetryBookTitles = getBookTitlesByCategory(Category.Poetry);
// optional parameters
// createCustomer("Foo");
// createCustomer("Bar", 12);
// createCustomer("Baz", 20, "Sydney");
// const idGenerator: (number, string) => string = createCustomerId; // function type
// console.log(idGenerator(1, 'Jasen'));
// const allbooks = getAllBooks();
// logFirstAvailable(allbooks);
// const allFictionBookTitles = getBookTitlesByCategory(Category.Fiction);
// logBookTitles(allFictionBookTitles);
//# sourceMappingURL=app.js.map