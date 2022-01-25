#!/usr/bin/env node
"use strict";
exports.__esModule = true;
exports.SayHello = void 0;
var SayHello = /** @class */ (function () {
    function SayHello(name) {
        this.name = name;
    }
    SayHello.prototype.sayHello = function () {
        return "Hello " + this.name + "!";
    };
    return SayHello;
}());
exports.SayHello = SayHello;
var who = process.argv[2] || "world";
console.log(new SayHello(who).sayHello());
