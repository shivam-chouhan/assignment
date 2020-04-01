async function data() {
   let personData = await fetch('db.json')
    .then(response => response.json())
    .then(personData => {return personData});
    addRow(personData);
    
}