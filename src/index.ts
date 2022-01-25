#!/usr/bin/env node

export class SayHello {

    constructor(public name: string) {
    }

    sayHello(): string {
        return "Hello " + this.name + "!"
    }

}

let who = process.argv[2] || "world"
console.log(new SayHello(who).sayHello())