#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
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
var who = process.argv[2] || "world";
var msg = new SayHello(who).sayHello();
var font = chalk.blue.underline;
msg = font(msg);
msg = boxen(msg, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
});
console.log(msg);
