var SayHello = /** @class */ (function () {
    function SayHello(name) {
        this.name = name;
    }
    SayHello.prototype.sayHello = function () {
        return "Hello " + this.name + "!";
    };
    return SayHello;
}());
export { SayHello };
