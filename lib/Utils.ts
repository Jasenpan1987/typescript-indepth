export function calculateLateFee (daysLate: number): number {
    return daysLate * 0.25;
}

export function maxBooksAllowed (age: number): number {
    return age > 12 ? 10 : 3;
}

function privateFunc (): void {
    console.log("this is a private function...");
}

