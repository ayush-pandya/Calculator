"use strict";
console.log("Hello");
const formElement = document.getElementById("new-employee-form");
console.log(formElement);
formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(formElement);
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const Email = document.getElementById("lname");
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(firstName);
    console.log(lastName);
    console.log(Email);
});
//# sourceMappingURL=index.js.map