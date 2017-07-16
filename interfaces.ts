import { Category } from './enums';

// object interface
interface Book {
    id: number,
    title: string,
    author: string,
    available: boolean,
    category: Category,
    pages?: number // optional property

    markDamaged?: DamageLogger
}

// function interface
interface DamageLogger {
    (reason: string): void
}

interface Person {
    name: string,
    email: string
}

// extends interfaces
interface Author extends Person {
    numBooksPublished: number
}

interface Librarian extends Person {
    department: string,
    assistCustomer: (customerName: string) => void
}

interface Magazine {
    title: string,
    publisher: string
}

export { Book, DamageLogger, Author, Librarian, Magazine };