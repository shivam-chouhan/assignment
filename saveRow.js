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