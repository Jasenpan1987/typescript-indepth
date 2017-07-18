"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
// 2) promise
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
// getBookByCategoryPromise(Category.Children)
//     .then((titles: string[]) => {
//         titles.forEach((title: string) => {
//             console.log(title);
//         });
//         return titles.length;
//     }, (error) => {// reject
//         return 0;
//     }).then((numberOfBooks: number) => {
//         console.log(numberOfBooks + " results found.");
//     }).catch((error: string) => {
//         console.log(error);
//     });
// 3) async await
function getBookByCategoryAsync(cat) {
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
function logSearchResult(cat) {
    return __awaiter(this, void 0, void 0, function () {
        var bookTitlesFound, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getBookByCategoryAsync(cat)];
                case 1:
                    bookTitlesFound = _a.sent();
                    bookTitlesFound.forEach(function (title) {
                        console.log(title);
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// logSearchResult(Category.Children);
// another way of error handling, since the awaited part is also a promise, so we can chain it with .catch or .then
function logSearchResult2(cat) {
    return __awaiter(this, void 0, void 0, function () {
        var bookTitlesFound;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getBookByCategoryAsync(cat)];
                case 1:
                    bookTitlesFound = _a.sent();
                    bookTitlesFound.forEach(function (title) {
                        console.log(title);
                    });
                    return [2 /*return*/, bookTitlesFound];
            }
        });
    });
}
logSearchResult2(enums_1.Category.Children)
    .then(function (titles) {
    console.log(titles.length + " books found");
}).catch(function (e) {
    console.log("reject reason: " + e.message);
});
//# sourceMappingURL=app.js.map