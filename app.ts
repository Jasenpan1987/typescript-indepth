function getAllBooks() {
    let books = [
        { title:"Node JS Guide", author: "justjavac", available: "true", category: Category.Biography },
        { title: "Introduction to react", author: "facebook", available: "true", category: Category.Fiction },
        { title: "How to use firebase", author: "google", available: false, category: Category.Poetry }
    ];

    return books;
}

function logFirstAvailable (books):void {
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

enum Category {
    Biography, Poetry, Fiction, History, Children
};

function getBookTitlesByCategory (category: Category): Array<string> {
    console.log(`Getting books with category ${category} (${Category[category]})`);
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.category === category).map(book => book.title);
}

function logBookTitles (titleArr: string[]): void {
    titleArr.forEach(title => console.log(`Title: ${title}`));
}

const allbooks = getAllBooks();
logFirstAvailable(allbooks);

const allFictionBookTitles = getBookTitlesByCategory(Category.Fiction);
logBookTitles(allFictionBookTitles);


