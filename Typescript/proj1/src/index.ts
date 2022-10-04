console.log("Hello")

// get the form html element
const formElement = <HTMLFormElement>document.getElementById("new-employee-form");
console.log(formElement)

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(formElement);
    const firstName = <HTMLInputElement>document.getElementById("fname");
    const lastName = <HTMLInputElement>document.getElementById("lname");
    const Email = <HTMLInputElement>document.getElementById("lname");

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(firstName);
    console.log(lastName);
    console.log(Email);
//   if (!Email.match(mailformat)) {
//     alert(${Email} is not a valid Email id);
//     return;
//   }
//   function validName(name: string) {
//     for (const iterator of firstName) {
        
//     }
//   }
})  