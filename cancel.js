function cancel(row, rowThis, data)
{
    let changeButton=document.getElementById("edit"+(row));
    changeButton.innerHTML = "EDIT";
    let changeButtonDel = document.getElementById("delete"+(row));
    changeButtonDel.innerHTML = "DELETE"; 
    changeButtonDel.addEventListener('click', function(){
        deleteRecord(rowThis);
    })
    changeButton.addEventListener('click', function(){
        editRecord(row);
    })
    // changeButtonDel.onclick = function(){
    //     deleteRecord(rowThis);
    // }
    // changeButton.onclick = function() {
    //     editRecord(row);
    // }
    for (i=0; i<7;i++)
    {
        let selectedElemets = document.getElementsByClassName("element"+row)[i];
        selectedElemets.contentEditable=false;
        selectedElemets.innerHTML = data[i];
        }
}  