function addRow()
{
    fetch('./db.json')
  .then(response => response.json())
  .then(json => console.log(json))





//     document.getElementById("loadData").style.display= 'none';
//     document.getElementById("refreshData").style.display= 'block';
//     document.getElementById("heading").style.visibility='visible';
//     let table = document.getElementById("clearTable");
//     for(let i = 0; i<personData.length; i++)
//     {
//         let r = table.insertRow();
//         r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].firstName}</i>`;
//         r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].middleName}</i>`;
//         r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].lastName}</i>`;
//         r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].email}</i>`;
//         r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].phone}</i>`;
//         r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].role}</i>`;
//         r.insertCell().innerHTML = `<i class = "element${+i}">${personData[i].address}</i>`;
//         r.insertCell().innerHTML = `<button type = "button" class ="w3-button" id ="edit${+i}" onclick="editRecord(${i},this)">EDIT</button>`;
//         r.insertCell().innerHTML = `<button type = "button" class ="w3-button" id = "delete${+i}" onClick="deleteRecord(this)">DELETE</button>`;
//     }
 }