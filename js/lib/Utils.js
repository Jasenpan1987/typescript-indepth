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
// this is a generic function of type T, it will take an array of T type as its parameters and return an array of T type
function purge(list) {
    return list.splice(2, list.length);
}
exports.purge = purge;
// this is the function to handle mixins
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
exports.applyMixins = applyMixins;
//# sourceMappingURL=Utils.js.map