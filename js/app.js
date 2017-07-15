var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
}());
var hello = new HelloWorld("Hello TS");
console.log(hello.message);
//# sourceMappingURL=app.js.map