"use strict";
// **************************** Class Decorators *******************************************************
Object.defineProperty(exports, "__esModule", { value: true });
// the class decorator takes single parameter to the function, which is the constructor of the 
// decorating class
function sealed(target) {
    console.log("Seal the constructor...");
    Object.seal(target); // seal the constructor
    Object.seal(target.prototype); // seal the constructor's prototype
}
exports.sealed = sealed;
// decorator function => allows us to give extra parameters to config the decorator
function sealedFactory(name) {
    return function (target) {
        console.log("Seal the constructor... " + name);
        Object.seal(target); // seal the constructor
        Object.seal(target.prototype); // seal the constructor's prototype
    };
}
exports.sealedFactory = sealedFactory;
// decorator that will replace the original constructor function
function logger(oriCtor) {
    var newCtor = function () {
        console.log("creating new instance...");
        console.log(oriCtor);
    };
    newCtor.prototype = Object.create(oriCtor.prototype);
    newCtor.prototype.constructor = oriCtor;
    return newCtor;
}
exports.logger = logger;
// **************************** Method Decorators *******************************************************
function readOnly(target, // the constructor of the class if the method is static, otherwise it will be the prototype of the class
    propertyKey, // the name of the method you want to decorate
    descriptor // property descriptor
) {
    console.log("the property of " + propertyKey + " will be set to read-only");
    descriptor.writable = false;
}
exports.readOnly = readOnly;
function writableFactory(isWritable) {
    return function (target, propertyKey, descriptor) {
        console.log(propertyKey + " will be set to " + (isWritable ? 'writable' : 'read-only') + "...");
        descriptor.writable = isWritable;
    };
}
exports.writableFactory = writableFactory;
//# sourceMappingURL=decorators.js.map