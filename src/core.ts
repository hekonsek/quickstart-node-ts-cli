export class SayHello {

    constructor(public name: string) {
    }

    sayHello(): string {
        return "Hello " + this.name + "!"
    }

}
