import { ReferenceItem } from './classes';

export default class Encyclopedia extends ReferenceItem {

    constructor (title: string, year: number, public edition: number){
        super(title, year);
    }

    printItem () {
        super.printItem(); // call parent's printItem
        console.log(`${this.title} is on ${this.edition} edition`); // child logic
    }

    printCitation() {
        console.log(`Cite from ${this.title}`);
    }
}