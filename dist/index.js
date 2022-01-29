#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import { SayHello } from "./core.js";
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
