// console.log("Hello World")
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // let number1 = 3;
// // let number2 : number = 2;
// // let number3 = 9;
// let age : number = 4;
// let isBirthDay:Boolean = true;
// if(isBirthDay == true){
//     age += 1;
// }
// function anyFunction(id: number, name: string, age:number = 24) {
//     console.log(id,name,age);
// }
// anyFunction(5,"AYush",22);
// anyFunction(5,"AYush");
// let someVariable = function(num1: number, num2: number){
//     console.log(num1 + num2);   
// }
// someVariable(5, 6);
// let anotherVariable = new Function("num1","num2","return num1 + num2");
// console.log(anotherVariable(10,20)); 
// // console.log(number1);
// const one: number = 1,
//     two:number = 2,
//     three: number = 3;
// enum numbers{
//     one = 1,
//     two = 2,
//     three = 3
// } 
// const sampleVariable: numbers = numbers.two;
// console.log(sampleVariable);
// let arr = [1,2,3,4,5,"6"];
// let arr1: number[] = [2,3,4];
// let arr2: string[] = new Array("abc","def");
// console.log(arr1);
// console.log(arr2);
// let [n1, n2, n3] = arr1;
// console.log(n1, n2, n3);
// for(let iterator in arr1){
// console.log(arr1[iterator]);
// }
// //.parseFloat to print float value
// let tupleVariable = [1, "abc",3.237, null];
// tupleVariable.push("7");    // adds the elemtn to the lat of the array
// tupleVariable.pop();    // Removes the element from the front of the array
// let floatVar: any = tupleVariable[2];
// console.log(floatVar.toFixed(2));
var Human = /** @class */ (function () {
    function Human(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Human.prototype.run = function () {
        console.log(this.firstName + " is Running");
    };
    Object.defineProperty(Human.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}());
var Athelete = /** @class */ (function (_super) {
    __extends(Athelete, _super);
    function Athelete(atheletId, firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.atheletId = atheletId;
        return _this;
    }
    Athelete.prototype.jump = function () {
        console.log(this.firstName + " is Jumping");
    };
    Athelete.prototype.jump = function (name) {
        console.log("Hello he is not runnign");
    };
    return Athelete;
}(Human));
var t = new Human("Vladimir", "Putin");
t.run();
