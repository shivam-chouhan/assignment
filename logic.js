// function show()
// {
//     let x= document.getElementById("firstText").value;
//     let y = document.getElementById("hey")
//     y.innerHTML=x;

let data =`[
    {
        "first":"Kartik",
        "middle": "" , 
        "last" : "Grover",
        "email": "grover@abc.com",
        "phone": "7347666700",
        "role" : "developer",
        "address": "234/23"
    },
    {
        "first" : "Gary",
        "middle" : "",
        "last" : "malhotra",
        "email" : "gmalhotra@abc.com",
        "phone" : "7767676769",
        "role" : "manager",
        "address" : "634/73"
    },
    {
        "first" : "Vidyut",
        "middle" : "",
        "last" : "Pandita",
        "email" : "vidyut@abc.com",
        "phone" : "7397235927",
        "role" : "sales",
        "address" : "635/93"
    },
    {
        "first" : "navidar",
        "middle" : "",
        "last" : "singh",
        "email" : "gmalhotra@abc.com",
        "phone" : "7767676769",
        "role" : "manager",
        "address" : "634/73"
    },
    {
        "first" : "bulakar",
        "middle" : "",
        "last" : "bhagjana",
        "email" : "gmalhotra@abc.com",
        "phone" : "7767676769",
        "role" : "manager",
        "address" : "634/73"
    },
    {
        "first" : "tasty",
        "middle" : "",
        "last" : "chicken",
        "email" : "gmalhotra@abc.com",
        "phone" : "7767676769",
        "role" : "manager",
        "address" : "634/73"
    }
]`

let personData = JSON.parse(data);
function addRow()
{
    document.getElementById("loadData").style.display= 'none';
    document.getElementById("refreshData").style.display= 'block';
    document.getElementById("heading").style.visibility='visible';
    let table = document.getElementById("clearTable");
    for(let i = 0; i<personData.length; i++)
    {
        let r = table.insertRow();
        r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].first}</i>`;
        r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].middle}</i>`;
        r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].last}</i>`;
        r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].email}</i>`;
        r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].phone}</i>`;
        r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].role}</i>`;
        r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].address}</i>`;
        r.insertCell().innerHTML = `<button type = "button" class ="w3-button" id ="edit${+i}" onclick="editRecord(${i},this)">EDIT</button>`;
        r.insertCell().innerHTML = `<button type = "button" class ="w3-button" id = "delete${+i}" onClick="deleteRecord(this)">DELETE</button>`;
    }
}
function deleteRecord(row)
{
    let currentRow = row.parentNode.parentNode.rowIndex;
    document.getElementById("wholeTable").deleteRow(currentRow);
}
function editRecord(rowNumber,rowThis)
{
    let data= []; 
    let changeButton=document.getElementById("edit"+(rowNumber));
    changeButton.innerHTML = "SAVE";
    changeButton.onclick = function (){
        saveRow(rowNumber, rowThis);
    }
    let selectedRecord = document.getElementById("wholeTable");
    for (let i = 0 ;i<7; i++)
    {
        let selectedElements = selectedRecord.getElementsByClassName("element"+(rowNumber))[i];
        data[i] = selectedElements.innerHTML;
        console.log(data[i]);
        selectedElements.contentEditable = true;
    }  
    let changeButtonDel = document.getElementById("delete"+(rowNumber));
    changeButtonDel.innerHTML = "CANCEL"; 
    changeButtonDel.onclick = function(){
        cancel(rowNumber , rowThis, data);
    
    }
}
function refresh()
{
    let table = document.getElementById("clearTable");
    table.innerHTML="";
    addRow();
}
function saveRow(rowNumber, rowThis)
{
    let changeButton=document.getElementById("edit"+(rowNumber));
    changeButton.innerHTML = "EDIT";
    changeButtonDel=document.getElementById("delete"+(rowNumber));
    changeButtonDel.innerHTML="DELETE";
    changeButton.onclick = function() {
        editRecord(rowNumber);
        }
    changeButtonDel.onclick = function() {
        deleteRecord(rowThis);
    }
    let selectedRecord = document.getElementById("wholeTable");
    for (let i = 0 ; i<7; i++)
{
    let selectedElements = selectedRecord.getElementsByClassName("element"+(rowNumber))[i];
    selectedElements.setAttribute("contentEditable", "false");
    }
}
function cancel(row, rowThis, data)
{
    let changeButton=document.getElementById("edit"+(row));
    changeButton.innerHTML = "EDIT";
    let changeButtonDel = document.getElementById("delete"+(row));
    changeButtonDel.innerHTML = "DELETE"; 
    changeButtonDel.onclick = function(){
        deleteRecord(rowThis);
    }
    changeButton.onclick = function() {
        editRecord(row);
    }
    for (i=0; i<7;i++)
    {
        let selectedElemets = document.getElementsByClassName("element"+row)[i];
        selectedElemets.contentEditable=false;
        selectedElemets.innerHTML = data[i];
        }
}  