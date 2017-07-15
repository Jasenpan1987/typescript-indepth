class HelloWorld {
    constructor (public message: string){

    }
}

var hello = new HelloWorld("Hello TS");
console.log(hello.message);