export default class Shelf<T> {
    private _items: Array<T> = new Array<T>();

    add(item: T): void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }
}