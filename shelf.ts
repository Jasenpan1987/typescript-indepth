interface ShelfItem {
    title: string
}

export default class Shelf<T extends ShelfItem> { // give constrains
    private _items: Array<T> = new Array<T>();

    add(item: T): void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }

    find(title: string): T {
        return this._items.find(i => i.title === title);
    }

    printTitles(): void {
        this._items.forEach(i => console.log(i.title));
    }
}