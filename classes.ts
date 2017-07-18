import { Book, DamageLogger, Author, Librarian } from './interfaces';

const MY_SYMBOL = Symbol();

class Employee {
    title: string;

    addToSchedule(): void {
        console.log("Employee added to schedual...");
    }

    logTitle(): void {
        console.log(`Employee's title: ${this.title}`);
    }
}

class Researcher {
    doResearch(topic: string): void {
        console.log(`Researcher's topic is ${topic}`);
    }
}

// Mixins
// 1) need to IMPLEMENT all the classes you needed just like implements interfaces
// 2) added function/property types of the interfaces that requires
// 3) take a look at applyMixin function in the Utils.ts
class UniLibrarian implements Librarian, Employee, Researcher {
    name: string;
    email: string;
    department: string;

    assistCustomer (customerName: string): void {
        console.log("Helping " + customerName);
    }

    assistAuthority () {
        console.log("assisting authority");
    }

    [MY_SYMBOL](): void { // symbol name
        console.log("calling the method with name of symbol...");
    }

    title: string;

    addToSchedule: () => void;
    logTitle: () => void;
    doResearch: (topic: string) => void;
}

class PublicLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer (customerName: string): void {
        console.log("Helping " + customerName);
    }

    teachCommunity () {
        console.log("Teaching community");
    }
}

abstract class ReferenceItem {
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

    printPublisher?():void { // optional method
        console.log(this.publisher);
    }

    abstract printCitation(): void // abstract method
}



export { UniLibrarian, PublicLibrarian, ReferenceItem, Employee, Researcher, MY_SYMBOL };