import { Category } from './enums';
import { Book, DamageLogger, Librarian, Author } from './interfaces';
import { UniLibrarian, ReferenceItem, Encyclopedia } from './classes';

function getAllBooks(): Book[] {
    let books = [
        { id: 1, title:"Node JS Guide", author: "justjavac", available: true, category: Category.Biography },
        { id: 2, title: "Introduction to react", author: "facebook", available: true, category: Category.Fiction },
        { id: 3, title: "How to use firebase", author: "google", available: false, category: Category.Poetry }
    ];

    return books;
}

function logFirstAvailable (books: Book[]):void {
    let numberOfBooks = books.length;
    let bookAvailable: string = "";

    for (let book of books) {
        if(book.available) {
            bookAvailable = book.title;
            break;
        }
    }

    console.log("Total number of books: " + numberOfBooks);
    console.log("First book available: " + bookAvailable);
}

function getBookById (id: number): Book|undefined {
    return getAllBooks().find(book => book.id === id);
}

function getBookTitlesByCategory (category: Category=Category.Fiction): Array<string> {
    console.log(`Getting books with category ${category} (${Category[category]})`);
    const allBooks = getAllBooks();
    return allBooks.filter((book: Book) => book.category === category).map((book: Book) => book.title);
}

function logBookTitles (titleArr: string[]): void {
    titleArr.forEach(title => console.log(`Title: ${title}`));
}

function createCustomerId (id: number, name: string): string {
    return id + name;
}

function createCustomer (name: string, age?: number, city?: string):void {
    console.log(name);
    age && console.log(age);
    city && console.log(city);
}

function checkoutBooks (customer: string, ...bookIds: number[]): string[] {
    return getAllBooks()
        .filter((book: Book) => bookIds.indexOf(book.id)!==-1)
        .map((book: Book) => book.title);
}

// function overload
function getBookTitles (author: string): string[];
function getBookTitles (available: boolean): string[];
function getBookTitles (filterProperty: string | boolean): string[] {
    if(typeof filterProperty === 'string') {
        return getAllBooks()
            .filter((book: Book) => book.author === filterProperty)
            .map((book: Book) => book.title);
    } else if(typeof filterProperty === 'boolean') {
        return getAllBooks()
            .filter((book: Book) => book.available === filterProperty)
            .map((book: Book) => book.title);
    }
}



/******************************************************************************************/

const encyclopediaBook = new Encyclopedia("World Encyc", 1999, 3);
encyclopediaBook.printItem();

// const ref: ReferenceItem = new ReferenceItem("Foo Item", 1986);
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


