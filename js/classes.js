"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    ReferenceItem.prototype.printPublisher = function () {
        console.log(this.publisher);
    };
    ReferenceItem.department = "Research"; // static property, only accessable from the class
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
var Encyclopedia = (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this); // call parent's printItem
        console.log(this.title + " is on " + this.edition + " edition"); // child logic
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log("Cite from " + this.title);
    };
    return Encyclopedia;
}(ReferenceItem));
exports.Encyclopedia = Encyclopedia;
//# sourceMappingURL=classes.js.map