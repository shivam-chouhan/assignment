function deleteRecord(row)
{
    let currentRow = row.parentNode.parentNode.rowIndex;
    document.getElementById("wholeTable").deleteRow(currentRow);
}