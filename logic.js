function addRow()
{
    document.getElementById("loadData").style.display= 'none';
    document.getElementById("refreshData").style.display= 'block';
    document.getElementById("heading").style.visibility='visible';
    let table = document.getElementById("clearTable");
    for(let i = 0; i<personData.length; i++)
    {
        let r = table.insertRow();
        r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].firstName}</i>`;
        r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].middleName}</i>`;
        r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].lastName}</i>`;
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