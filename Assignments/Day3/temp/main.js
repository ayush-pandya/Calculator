// window.addEventListener('load', () =>{
//     const form =document.querySelector("#add-task-form");
//     const input = document.querySelector(#)
// })
let todos = []
window.onclick = function(event) {
    if(event.target.className === "todo-body"){
        console.log("safs");
        finishAdd();
    }
    // if(event.target.)
}
function openForm(event) {
    // event.preventDefault();
    document.getElementById("myForm").style.display = "block";
}

function closeForm(event) {
    document.getElementById("myForm").style.display = "none";
}

function inputValue(itemName) {
    let input = document.createElement("input");
    // input.value = itemName;
    input.classList.add("item_input");
    input.type = "text";
    input.setAttribute("placeholder", itemName); //To add more attribute use setAttribute
    input.setAttribute("class", "new-task"); //To add more attribute use setAttribute
    return input;
}

function statusValue(status) {
    let btn = document.createElement("button");
    var values = ["Todo", "Completed", "In Progress"];

    var select = document.createElement("select");
    select.name = "status";
    select.id = "status";

    for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    var label = document.createElement("label");
    // select.setAttribute("class", "new-task");
    console.log(status.length);
    if(status.length != 0){
        select.setAttribute("value",status);
    }
    select.setAttribute("class", "new-task");
    return btn.appendChild(label).appendChild(select);
}
function takeValues(row) {
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.appendChild(inputValue("Task Number"));

    //  cell2.innerHTML = "";// How to make it work using innerHTML.
    cell2.appendChild(inputValue("Task Name"));

    cell3.appendChild(statusValue(""));

    var btn = document.createElement("button"); //1st way
    btn.className = "edit-btn";
    btn.innerHTML = '<img src="https://img.icons8.com/material/24/000000/edit--v1.png"/>';
    // btn.onclick = editTask();

    cell4.appendChild(btn);
    // 2nd way
    cell5.innerHTML =
        '<button><img src="https://img.icons8.com/small/32/000000/filled-trash.png"/></button>';

    // const element = document.getElementsByTagName("body");
    // element.addEventListener("dblclick", finishAdd());
    // console.log(element);
    return row;
}
function addTask() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    row = takeValues(row);
    // console.log(document.getElementsByTagName("header"));
    // (document.getElementsByTagName("table")[0]).matches.addEventListener("click", function(){
    //     finishAdd()
    // });
    // window.onclick = function (event) {
        // console.log(typeof(event.target.className));
        // console.log(event.target.className);
        // console.log(event.target);
        // console.log(typeof('add-task-button'));
        // if (event.target.className === "todo-body") {
            // addEventListener("click", function(){
                // finishAdd();
            //  });
        // }
    // };
}
function finishAdd() {
    let values = document.getElementsByClassName("new-task");
    // values.setAttribute("class","");
    // console.log(values.length);
    // todos.unshift(values);
    // document.getElementById("myTable").appendChild(values[0]);
    // dict = [values.cell1.value,values.cell2.value,values.cell3.value]
    // todos.unshift(dict);
    let row = document.createElement('tr');
    for (const val of values) {
        console.log(val);
        // var status = val.getAttribute("value");

        // console.log(val1.value);
        let cell = document.createElement('td');
        let btn = document.createElement("button");

        if (val.value == "") {
            break;
        }
        if (val.value == "Todo") {
            btn.setAttribute("class", "todo-button");
            btn.innerHTML = val.value;
            cell.appendChild(btn);
        }
        else if (val.value == "In Progress") {
            btn.setAttribute("class", "inProgress-button");
            btn.innerHTML = val.value;
            cell.appendChild(btn);
        }
        else if (val.value == "Completed") {
            btn.setAttribute("class", "completed-button");
            btn.innerHTML = val.value;
            cell.appendChild(btn);
        }
        else {
            cell.innerHTML = val.value;
        }

        row.appendChild(cell);
    }
    let editCell = document.createElement('td');
    var editBtn = document.createElement("button"); //1st way
    editBtn.className = "edit-btn";
    editBtn.innerHTML = '<img src="https://img.icons8.com/material/24/000000/edit--v1.png"/>';

    editBtn.addEventListener('click',(e) =>{
        let row = e.target.closest('tr');
        console.log(row);
        let values = row.getElementsByTagName('td');
        // console.log(values[0]);
        let cell1 = "<td><input type='text' class='new-text'" +  " value='" + values[0].innerText + "'></td>";
        let cell2 = "<td><input type='text' class='new-text'" +  " value='" + values[1].innerText + "'></td>";
        let cell3 = "<td>" + statusValue(values[2].childNodes[0].innerText).outerHTML+ "</td>";
        // row.closest('tr').remove();
        console.log(cell3);

        let newRow = document.createElement("tr");
      
        newRow.innerHTML = cell1 + cell2 + cell3 + "<td>" + values[3].innerHTML + "</td>"+ "<td>"+values[4].innerHTML+"</td>";
       
        console.log(newRow);
        row.remove();
        // newRow.setAttribute("class", "new-task");
        document.getElementById("myTable").appendChild(newRow);
    });
    console.log(editBtn);
    editCell.appendChild(editBtn);
    row.appendChild(editCell);

    let delCell = document.createElement('td');
    var delBtn = document.createElement("button"); //1st way
    delBtn.className = "del-btn";
    delBtn.innerHTML = '<img src="https://img.icons8.com/small/32/000000/filled-trash.png"/>';
    delBtn.setAttribute("onclick", "deleteTask()");
    console.log(delBtn);
    delCell.appendChild(delBtn);
    row.appendChild(delCell);
    
    console.log(values[0]);
    let rowId = "rowId".concat(values[0].value);
    row.setAttribute("id", rowId);
    console.log(rowId);  
    document.getElementById("myTable").appendChild(row);
    // todos.unshift(row);
    document.getElementById("myTable").deleteRow(1);

}
function editTask() {
    // window.onclick = function (event) {
    //     // if (event.target.className === "todo-body") {
    //     //     addEventListener("click", function(){
    //     //         finishAdd();
    //     //      });
    //     // }else{
        let rowTarget = target;
        btn.closest('tr').remove();
    //     let row = rowTarget.closest('tr');
    //     console.log(row);
    //     let values = row.getElementsByTagName('td');
    //     // console.log(values[2].childNodes[0].value);
    //     console.log(values[2].childNodes[0].innerText);
    //     console.log(values[0].innerText);
    //     console.log(statusValue(values[2].childNodes[0].innerText));
    //     let cell1 = "<td><input type='text' class='new-text'" +  " value='" + values[0].innerText + "'></td>";
    //     let cell2 = "<td><input type='text' class='new-text'" +  " value='" + values[1].innerText + "'></td>";
    //     let cell3 = "<td>" + statusValue(values[2].childNodes[0].innerText).outerHTML+ "</td>";
    //     // row.closest('tr').remove();
    //     console.log(cell3);
    //     let tab = document.getElementsByClassName("todo-table");
    //     let newRow = document.createElement("tr");
    //     newRow.innerHTML = cell1 + cell2 + cell3 + "<td>" + values[3].innerHTML + "</td>"+ "<td>"+values[4].innerHTML+"</td>";
    //     console.log(newRow);
    //     // row.replaceChild(row, newRow);
    //     // console.log(tab);
    //     row.remove();
    //     // newRow.setAttribute("class", "new-task");
    //     document.getElementById("myTable").appendChild(newRow);
    //     // }
    //     // if (event.target.className === "todo-body") {
    //     //     finishAdd();
    //     // }
    //     // console.log(row.id);
    //     // console.log(typeof(event.target.className));
        
    //     // console.log(event.target.parentElement.className);
        
    //     // console.log(event.target);
    //     // console.log(typeof('add-task-button'));
        
    //     // console.log(event.target.parentElement.id.substring(0, 8));
    //     // console.log(event.target.parentElement.parentElement.parentElement.id.substring(0, 8));
    //     // console.log(event.target.parentElement.parentElement.id.substring(0, 8));

    //     // if (event.target.parentElement.id.substring(0, 8) === "rowClass") {

    //     // }
    //     // else if (event.target.parentElement.parentElement.id.substring(0, 8) === "rowClass") {
    //     //     console.log(event.target.parentElement.id);
    //     // }
    // };

    // document.getElementById("edit_button" + no).style.display = "none";
    // document.getElementById("save_button" + no).style.display = "block";

    // var name = document.getElementById("name_row" + no);
    // var country = document.getElementById("country_row" + no);
    // var age = document.getElementById("age_row" + no);

    // var name_data = name.innerHTML;
    // var country_data = country.innerHTML;
    // var age_data = age.innerHTML;

    // name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    // country.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
    // age.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
}
function deleteTask() {
    window.onclick = function (event) {
        // console.log(typeof(event.target.className));
        // console.log(event.target.parentNode.id);
        // console.log(event.target.parentNode.parentNode.parentNode.id);
        // console.log(event.target);
        // console.log(typeof('add-task-button'));
        // console.log(event.target.parentElement.className.substring(0, 8));
        // console.log(event.target.parentElement.parentElement.parentElement.className.substring(0, 8));
        // console.log(event.target.parentElement.parentElement.className.substring(0, 8));
        const btn = event.target;
        btn.closest('tr').remove();
        // if (event.target.parentElement.parentElement.parentElement.id.substring(0, 8) === "rowId") {
        //     // event.target.parentElement.id.removeChild();
        //     console.log(document.getElementById("myTable"));
        //     // document.
        //     document.querySelector("#myTable").removeChild(document.getElementById(event.target.parentElement.parentElement.parentElement.id));
        // }
        // else if(event.target.parentElement.parentElement.id.substring(0, 8) === "rowId") {
        //     console.log(event.target.parentElement.parentElement.id);
        // }
    };
}
