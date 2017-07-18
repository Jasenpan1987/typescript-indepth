"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MY_SYMBOL = Symbol();
exports.MY_SYMBOL = MY_SYMBOL;
var Employee = (function () {
    function Employee() {
    }
    Employee.prototype.addToSchedule = function () {
        console.log("Employee added to schedual...");
    };
    Employee.prototype.logTitle = function () {
        console.log("Employee's title: " + this.title);
    };
    return Employee;
}());
exports.Employee = Employee;
var Researcher = (function () {
    function Researcher() {
    }
    Researcher.prototype.doResearch = function (topic) {
        console.log("Researcher's topic is " + topic);
    };
    return Researcher;
}());
exports.Researcher = Researcher;
// Mixins
// 1) need to IMPLEMENT all the classes you needed just like implements interfaces
// 2) added function/property types of the interfaces that requires
// 3) take a look at applyMixin function in the Utils.ts
var UniLibrarian = (function () {
    function UniLibrarian() {
    }
    UniLibrarian.prototype.assistCustomer = function (customerName) {
        console.log("Helping " + customerName);
    };
    UniLibrarian.prototype.assistAuthority = function () {
        console.log("assisting authority");
    };
    UniLibrarian.prototype[MY_SYMBOL] = function () {
        console.log("calling the method with name of symbol...");
    };
    return UniLibrarian;
}());
exports.UniLibrarian = UniLibrarian;
var PublicLibrarian = (function () {
    function PublicLibrarian() {
    }
    PublicLibrarian.prototype.assistCustomer = function (customerName) {
        console.log("Helping " + customerName);
    };
    PublicLibrarian.prototype.teachCommunity = function () {
        console.log("Teaching community");
    };
    return PublicLibrarian;
}());
exports.PublicLibrarian = PublicLibrarian;
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
//# sourceMappingURL=classes.js.map