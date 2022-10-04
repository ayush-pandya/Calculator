"use strict";
class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    run() {
        console.log(this.firstName + " is Running");
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Athelete extends Human {
    constructor(atheletId, firstName, lastName) {
        super(firstName, lastName);
        this.atheletId = atheletId;
    }
    jump() {
        console.log(this.firstName + " is Jumping");
    }
    jump(name) {
        console.log("Hello he is not runnign");
    }
}
let t = new Human("Vladimir", "Putin");
t.run();
//# sourceMappingURL=index.js.map