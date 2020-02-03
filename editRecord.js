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