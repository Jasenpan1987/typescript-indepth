"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateLateFee(daysLate) {
    return daysLate * 0.25;
}
exports.calculateLateFee = calculateLateFee;
function maxBooksAllowed(age) {
    return age > 12 ? 10 : 3;
}
exports.maxBooksAllowed = maxBooksAllowed;
function privateFunc() {
    console.log("this is a private function...");
}
//# sourceMappingURL=Utils.js.map