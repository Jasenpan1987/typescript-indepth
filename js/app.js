"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// const snakeCaseTitle = _.snakeCase("Something Good To Have");
// // console.log(snakeCaseTitle);
// function getAllBooks(): Book[] {
//     let books = [
//         { id: 1, title:"Node JS Guide", author: "justjavac", available: true, category: Category.Biography },
//         { id: 2, title: "Introduction to react", author: "facebook", available: true, category: Category.Fiction },
//         { id: 3, title: "How to use firebase", author: "google", available: false, category: Category.Poetry }
//     ];
//     return books;
// }
// function logFirstAvailable (books: Book[]):void {
//     let numberOfBooks = books.length;
//     let bookAvailable: string = "";
//     for (let book of books) {
//         if(book.available) {
//             bookAvailable = book.title;
//             break;
//         }
//     }
//     console.log("Total number of books: " + numberOfBooks);
//     console.log("First book available: " + bookAvailable);
// }
// function getBookById (id: number): Book|undefined {
//     return getAllBooks().find(book => book.id === id);
// }
// function getBookTitlesByCategory (category: Category=Category.Fiction): Array<string> {
//     console.log(`Getting books with category ${category} (${Category[category]})`);
//     const allBooks = getAllBooks();
//     return allBooks.filter((book: Book) => book.category === category).map((book: Book) => book.title);
// }
// function logBookTitles (titleArr: string[]): void {
//     titleArr.forEach(title => console.log(`Title: ${title}`));
// }
// function createCustomerId (id: number, name: string): string {
//     return id + name;
// }
// function createCustomer (name: string, age?: number, city?: string):void {
//     console.log(name);
//     age && console.log(age);
//     city && console.log(city);
// }
// function checkoutBooks (customer: string, ...bookIds: number[]): string[] {
//     return getAllBooks()
//         .filter((book: Book) => bookIds.indexOf(book.id)!==-1)
//         .map((book: Book) => book.title);
// }
// // function overload
// function getBookTitles (author: string): string[];
// function getBookTitles (available: boolean): string[];
// function getBookTitles (filterProperty: string | boolean): string[] {
//     if(typeof filterProperty === 'string') {
//         return getAllBooks()
//             .filter((book: Book) => book.author === filterProperty)
//             .map((book: Book) => book.title);
//     } else if(typeof filterProperty === 'boolean') {
//         return getAllBooks()
//             .filter((book: Book) => book.available === filterProperty)
//             .map((book: Book) => book.title);
//     }
// }
// function printBookInfo ({ title: bookTitle, author: bookAuthor }: Book): void {
//     console.log(`Title: ${bookTitle}, Author: ${bookAuthor}`);
// }
// function logFavoriteBooks ([book1, ...others]: Book[]): void {
//     printBookInfo(book1);
//     others.forEach((book: Book) => {
//         console.log(book.title);
//     });
// }
// function getAllMagazines (): Magazine[] {
//     return [
//         { title: "Coding every month", publisher: "Packt"},
//         { title: "Awesome JS", publisher: "Packt"},
//         { title: "New Node", publisher: "Orally"}
//     ];
// }
// // // Tuple Type
// // let catalogLocation: [string, Book] = ['A 123.456', getAllBooks()[0]]; // this is a tuple type, which means the first element should be a 
// // // string type, and the second element of the array should be a type of Book, other elements can be either a string or a book
// // catalogLocation[2] = 'Foo'; // works
// // // catalogLocation[3] = false; // not work
// // // create a interface that works similar to the tuple type
// // interface KeyValuePair<K, V> extends Array<K | V> {
// //     0: K,
// //     1: V
// // };
// // let catalogLocation2: KeyValuePair<string, Book> = ['123 ABC', getAllBooks()[1]]; // also works
// // // Union Type
// // type PrintMaterial = Book | Magazine;
// // type Serial = Book & Magazine;
// // const allBooks = getAllBooks();
// // const allMagazines = getAllMagazines();
// // const readingMaterial: PrintMaterial = allMagazines[0];
// // function printTitle (readingMaterial: PrintMaterial): void { // only take Book or Magazine type as its parameter
// //     console.log(readingMaterial.title);
// // }
// // // Intersaction TYpe
// // const novel: Serial = { // should have all the properties of a book and a magazine
// //     id: 1, 
// //     title:"Node JS Guide", 
// //     author: "justjavac", 
// //     available: true, 
// //     category: Category.Biography,
// //     publisher: "Packt"
// // }
// /******************************************************************************************/
// // // string literal and type alias
// // let frenquency: 'Monthly' | 'Annually' = 'Monthly'; 
// // // indicate frenquency can only be one of the 'Monthly' or 'Annually', others will cause error
// // type Frenq = 'Monthly' | 'Weekly' | 'Daily' | 'Annually'; // type alias
// // function getMagazineByFrenq (frenq: Frenq): void { // type alias can makes the code shorter
// //     console.log(frenq);
// // }
// // // Mixins => just like multi inheritance
// // applyMixins(UniLibrarian, [Researcher, Employee]); // complete the mixin
// // // console.log(UniLibrarian.prototype)
// // const utsLibrarian = new UniLibrarian(); // now the instance of UniLibrarian has the properties and methods of the derived classes
// // utsLibrarian.addToSchedule();
// // logFavoriteBooks(getAllBooks());
// // const [ book1, book2 ] = getAllBooks();
// // printBookInfo(book1);
// // printBookInfo(book2);
// // const inventory: Array<Book> = [
// //     { id: 1, title:"Node JS Guide", author: "justjavac", available: true, category: Category.Biography },
// //     { id: 2, title: "Introduction to react", author: "facebook", available: true, category: Category.Fiction },
// //     { id: 3, title: "How to use firebase", author: "google", available: false, category: Category.Poetry }
// // ];
// // const mag: Array<Magazine> = [
// //     { title: "Coding every month", publisher: "Packt"},
// //     { title: "Awesome JS", publisher: "Packt"},
// //     { title: "New Node", publisher: "Orally"}
// // ];
// // const bookShelf: Shelf<Book> = new Shelf<Book>(); // bookshelf with Book
// // inventory.forEach(book => bookShelf.add(book));
// // console.log(bookShelf.getFirst().title);
// // const magShelf: Shelf<Magazine> = new Shelf<Magazine>(); // bookshelf with Magazine
// // mag.forEach(m => magShelf.add(m));
// // console.log(magShelf.getFirst().title);
// // magShelf.printTitles();
// // const firstMagazineOnShelf: Magazine = magShelf.getFirst();
// // console.log(firstMagazineOnShelf.title);
// // generic function
// // const inventory: Array<Book> = [
// //     { id: 1, title:"Node JS Guide", author: "justjavac", available: true, category: Category.Biography },
// //     { id: 2, title: "Introduction to react", author: "facebook", available: true, category: Category.Fiction },
// //     { id: 3, title: "How to use firebase", author: "google", available: false, category: Category.Poetry }
// // ];
// // const purgedInventory = purge<Book>(inventory); // gives Book to T during the invokation
// // purgedInventory.forEach((book: Book) => console.log(book.title));
// // const numbers = [1, 2, 3, 4, 5];
// // const purgedNumber: Array<number> = purge<number>(numbers);
// // console.log(purgedNumber);
// // class literal
// // const Newspaper = class extends ReferenceItem {
// //     printCitation() {
// //         console.log(`Citation from a newspaper ${this.title}`);
// //     }
// // }
// // let australian = new Newspaper("The Australian", 2017);
// // australian.printItem();
// // australian.printCitation();
// // abstract class
// // const encyclopediaBook = new Encyclopedia("World Encyc", 1999, 3);
// // encyclopediaBook.printItem();
// // encyclopediaBook.printCitation();
// // const ref: ReferenceItem = new ReferenceItem("Foo Item", 1986); // error, can't instantiate abstract class
// // ref.printItem();
// // ref.publisher = "Random Publisher";
// // console.log(ref.publisher);
// // let faviorateLibrarian: Librarian;
// // faviorateLibrarian = new UniLibrarian();
// // faviorateLibrarian.name = "Foo";
// // faviorateLibrarian.assistCustomer("Bar");
// // const faviorateAuthor: Author = {
// //     name: "Foo",
// //     email: "foo@gmail.com",
// //     numBooksPublished: 10
// // };
// // const UTSLibrarian: Librarian = {
// //     name: "Bar",
// //     email: "bar@gmail.com",
// //     department: "UTS building 5",
// //     assistCustomer: function(name){
// //         console.log(this.name + " is helping " + name);
// //     }
// // }
// // const myBook: Book = {
// //     id: 9,
// //     title: "Random book",
// //     author: "Foo",
// //     category: Category.Children,
// //     available: true,
// //     // foo: bar, // you can't have additional properties beyond the interface defination if the object marked
// //                  // as an implementation of the interface, however, you can have it if it is not marked
// //     markDamaged: function (reason: string) {
// //         console.log("damanged because " + reason);
// //     }
// // }
// // let reportDamage: DamageLogger;
// // reportDamage = (reason: string) => console.log("To Admin: a book is damanged " + reason);
// // reportDamage("coffee stains");
// // function overloading
// // const facebookBookTitles = getBookTitles('facebook');
// // logBookTitles(facebookBookTitles);
// // const availableBookTitles = getBookTitles(true);
// // logBookTitles(availableBookTitles);
// // rest parameters
// // const johnBooks = checkoutBooks("John", 1, 2);
// // logBookTitles(johnBooks);
// // default parameters
// // const allFictionBookTitles = getBookTitlesByCategory();
// // const allPoetryBookTitles = getBookTitlesByCategory(Category.Poetry);
// // optional parameters
// // createCustomer("Foo");
// // createCustomer("Bar", 12);
// // createCustomer("Baz", 20, "Sydney");
// // const idGenerator: (number, string) => string = createCustomerId; // function type
// // console.log(idGenerator(1, 'Jasen'));
// // const allbooks = getAllBooks();
// // logFirstAvailable(allbooks);
// // const allFictionBookTitles = getBookTitlesByCategory(Category.Fiction);
// // logBookTitles(allFictionBookTitles);
// /******************************************************************************************/
// Polymophic this and fluent API
var LibraryBook = (function () {
    function LibraryBook() {
    }
    LibraryBook.prototype.checkin = function () {
        if (this instanceof ChildrenBook) {
            console.log("Check in a children book");
        }
        else {
            console.log("Check in a book");
        }
        return this;
    };
    LibraryBook.prototype.checkout = function () {
        console.log("check out a book");
        return this;
    };
    return LibraryBook;
}());
var ChildrenBook = (function (_super) {
    __extends(ChildrenBook, _super);
    function ChildrenBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildrenBook.prototype.clean = function () {
        console.log("clean a book");
        return this;
    };
    return ChildrenBook;
}(LibraryBook));
// Polymophic this means the this keyword refers to different object depends on the context it getting called
// fluent api means methods of a class return the instance which calling it to enable chaining
var kidBook = new ChildrenBook();
kidBook.checkin()
    .checkout()
    .clean();
//# sourceMappingURL=app.js.map