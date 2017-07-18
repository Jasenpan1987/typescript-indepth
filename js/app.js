"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
// const snakeCaseTitle = _.snakeCase("Something Good To Have");
// // console.log(snakeCaseTitle);
function getAllBooks() {
    var books = [
        { id: 1, title: "Node JS Guide", author: "justjavac", available: true, category: enums_1.Category.Biography },
        { id: 2, title: "Introduction to react", author: "facebook", available: true, category: enums_1.Category.Fiction },
        { id: 3, title: "How to use firebase", author: "google", available: false, category: enums_1.Category.Poetry }
    ];
    return books;
}
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
function getBookTitlesByCategory(category) {
    if (category === void 0) { category = enums_1.Category.Fiction; }
    console.log("Getting books with category " + category + " (" + enums_1.Category[category] + ")");
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book.category === category; }).map(function (book) { return book.title; });
}
function getBookByCategoryCb(cat, callback) {
    setTimeout(function () {
        try {
            var foundBookTitles = getBookTitlesByCategory(cat);
            if (foundBookTitles.length > 0) {
                callback(null, foundBookTitles);
            }
            else {
                throw new Error("no book has been found...");
            }
        }
        catch (e) {
            callback(e, null);
        }
    }, 2000);
}
function logCateSearch(error, results) {
    if (error) {
        console.log("Error: ", error.message);
    }
    else {
        results.forEach(function (item, idx) {
            console.log("#" + (idx + 1) + ": " + item);
        });
    }
}
// getBookByCategoryCb(Category.Biography, logCateSearch);
function getBookByCategoryPromise(cat) {
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var foundBookTitles = getBookTitlesByCategory(cat);
            if (foundBookTitles.length > 0) {
                resolve(foundBookTitles);
            }
            else {
                reject("No book was found...");
            }
        }, 2000);
    });
    return p;
}
getBookByCategoryPromise(enums_1.Category.Children)
    .then(function (titles) {
    titles.forEach(function (title) {
        console.log(title);
    });
    return titles.length;
}, function (error) {
    return 0;
}).then(function (numberOfBooks) {
    console.log(numberOfBooks + " results found.");
}).catch(function (error) {
    console.log(error);
});
//# sourceMappingURL=app.js.map