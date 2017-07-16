"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UniLibrarian = (function () {
    function UniLibrarian() {
    }
    UniLibrarian.prototype.assistCustomer = function (customerName) {
        console.log("Helping " + customerName);
    };
    return UniLibrarian;
}());
exports.UniLibrarian = UniLibrarian;
var ReferenceItem = (function () {
    function ReferenceItem(title, year, author) {
        this.title = title;
        this.year = year;
        console.log("Creating ReferenceItem...");
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (pub) {
            this._publisher = pub;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year);
        console.log(this.title + " belongs to department of " + ReferenceItem.department);
    };
    ReferenceItem.department = "Research"; // static property, only accessable from the class
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map