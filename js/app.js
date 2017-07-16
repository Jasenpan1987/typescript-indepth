function getAllBooks() {
    var books = [
        { title: "Node JS Guide", author: "justjavac", available: "true", category: Category.Biography },
        { title: "Introduction to react", author: "facebook", available: "true", category: Category.Fiction },
        { title: "How to use firebase", author: "google", available: false, category: Category.Poetry }
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
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
;
function getBookTitlesByCategory(category) {
    console.log("Getting books with category " + category + " (" + Category[category] + ")");
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book.category === category; }).map(function (book) { return book.title; });
}
function logBookTitles(titleArr) {
    titleArr.forEach(function (title) { return console.log("Title: " + title); });
}
var allbooks = getAllBooks();
logFirstAvailable(allbooks);
var allFictionBookTitles = getBookTitlesByCategory(Category.Fiction);
logBookTitles(allFictionBookTitles);
//# sourceMappingURL=app.js.map