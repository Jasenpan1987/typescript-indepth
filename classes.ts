import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer (customerName: string): void {
        console.log("Helping " + customerName);
    }
}

class ReferenceItem {
    private _publisher: string;
    static department: string = "Research"; // static property, only accessable from the class

    get publisher () {
        return this._publisher.toUpperCase();
    }

    set publisher (pub: string) {
        this._publisher = pub;
    }

    constructor (public title: string, private year: number, author?: string) {
        console.log("Creating ReferenceItem...");
    }

    printItem () {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`${this.title} belongs to department of ${ReferenceItem.department}`);
    }
}

class Encyclopedia extends ReferenceItem {

    constructor (title: string, year: number, public edition: number){
        super(title, year);
    }

    printItem () {
        super.printItem(); // call parent's printItem
        console.log(`${this.title} is on ${this.edition} edition`); // child logic
    }
}

export { UniLibrarian, ReferenceItem, Encyclopedia };