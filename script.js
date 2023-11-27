let csvData = ("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26")

let rows = csvData.split("\n");
console.log(rows);

let headers = rows[0].split(",")
console.log(headers); //this is a string

// let csvDataHeaders = rows.splice(0,1)
// console.log(csvDataNoHeaders); //this is an array 

let csvDataTable = []

for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].split(',');
  
    // Create an object to store the current row's data
    let rowData = {};
  
    // Loop through headers and assign values to corresponding keys in the object
    for (let j = 0; j < headers.length; j++) {
      rowData[headers[j]] = cells[j];
    }
    csvDataTable.push(rowData);
}
console.log(csvDataTable);