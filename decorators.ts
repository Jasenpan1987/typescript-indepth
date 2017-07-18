// **************************** Class Decorators *******************************************************

// the class decorator takes single parameter to the function, which is the constructor of the 
// decorating class
export function sealed (target: Function): void { // return void means it will not replace the class constructor
    console.log("Seal the constructor...");
    Object.seal(target); // seal the constructor
    Object.seal(target.prototype); // seal the constructor's prototype
}

// decorator function => allows us to give extra parameters to config the decorator
export function sealedFactory (name: string): Function { // return void means it will not replace the class constructor
    return function(target: Function): void {
        console.log(`Seal the constructor... ${name}`);
        Object.seal(target); // seal the constructor
        Object.seal(target.prototype); // seal the constructor's prototype
    }
}

// decorator that will replace the original constructor function
export function logger<TFunction extends Function>(oriCtor: TFunction): TFunction {
    let newCtor: Function = function() {
        console.log("creating new instance...");
        console.log(oriCtor);
    }

    newCtor.prototype = Object.create(oriCtor.prototype);
    newCtor.prototype.constructor = oriCtor;

    return <TFunction>newCtor;
}

// **************************** Method Decorators *******************************************************
export function readOnly (target: Object, // the constructor of the class if the method is static, otherwise it will be the prototype of the class
    propertyKey: string, // the name of the method you want to decorate
    descriptor: PropertyDescriptor // property descriptor
) {
    console.log(`the property of ${propertyKey} will be set to read-only`);
    descriptor.writable = false;
}

export function writableFactory (isWritable: boolean) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(`${propertyKey} will be set to ${isWritable ? 'writable': 'read-only'}...`);
        descriptor.writable = isWritable;
    }
}