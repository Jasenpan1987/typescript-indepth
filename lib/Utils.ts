export function calculateLateFee (daysLate: number): number {
    return daysLate * 0.25;
}

export function maxBooksAllowed (age: number): number {
    return age > 12 ? 10 : 3;
}

function privateFunc (): void {
    console.log("this is a private function...");
}

// this is a generic function of type T, it will take an array of T type as its parameters and return an array of T type
export function purge<T> (list: Array<T>): Array<T> {
    return list.splice(2, list.length);
}

// this is the function to handle mixins
export function applyMixins (derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}