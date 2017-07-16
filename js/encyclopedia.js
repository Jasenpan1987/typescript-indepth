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
var classes_1 = require("./classes");
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
}(classes_1.ReferenceItem));
exports.default = Encyclopedia;
//# sourceMappingURL=encyclopedia.js.map