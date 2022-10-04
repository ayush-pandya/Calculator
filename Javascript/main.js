let bigInt = 8921478912748217948124124123412n
let nullValue = null
let objVar = {
    "name" : "Ayush",
    "age" : 12,
    "mobile no" : 3254764212414141243124n
}

console.log(bigInt, objVar)
console.log(objVar.name)

let arrayName = ["ayush","abhi", "abhinav"]
console.log(arrayName.length)
console.log(arrayName[2])

console.log(3+5)
console.log(3>5)
console.log(3=="3")
console.log(3==="3")
console.log(4 - "4")
console.log(4 * "4")
console.log(4 * false)
console.log(Number("3241124"))
console.log(parseInt("3241124"))
console.log(parseInt("324.1124"))
console.log(parseFloat("324.1124"))
console.log(String(324.1124))
console.log(Boolean(324.1124))  //Whatever number u give inside Boolean it would give true, but empty string, 0, undefined it would give zero
console.log(Boolean(-4))

let x = 0
switch (x) {
    case x:
        console.log("Its zero")
        break;
    default:
        console.log("Its not zero")
        break;
}

// for (let iterator = 0; iterator < array.length; iterator++) {
//     const element = array[iterator];
    
// }

// do {
    
// } while (condition);

// for (const iterator of object) {
    
// }
// array.forEach(element => {
    
// });

function goodDay() {
    console.log("Good Day!");
}

function adder(a, b) {
    // console.log(a + b)
    return a+b
}

console.log(adder(4, 5))
 
const addera = (val1, val2) =>{ // => aka fatarrow
    return val1 + val2;
}

console.log(addera(2,4));
console.log(addera(5,4));
console.log(addera(5,4,3,4,1)); // would take 1st 2 parameter only

const adderb = (...num) => {
    let sum = 0
    for (const iterator of num) {
        sum += num
    }
    return sum
}

console.log(adderb(5,4,3,4,1)); // would take 1st 2 parameter only

const DemoMap = new Map();
DemoMap.set("a",1);
DemoMap.set("b",2);
DemoMap.set("c",3);
DemoMap.set(4,"d");
DemoMap.set(4,"e");

console.log(DemoMap.get("a"))
console.log(DemoMap.entries())

const DemoObj = {
    "name" : "Ayush",
    "age" : 34,
    "Surname" : "Pandya"
}
