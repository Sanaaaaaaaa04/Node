const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'curd')
const filePath = `${dirPath}/ofggggh.txt`;

//To write

// fs.writeFileSync(filePath,'to perform curd operation'); 

//To read

// fs.readFile(filePath,'utf8', (err, item) => {
//     console.log(item)
// }) 

// To update

// fs.appendFile(filePath, ' create, read, update, delete', (err) => {
//     if(!err) 
//         console.log("updated successfully !")
// }) 

//To rename

// fs.rename(filePath, `${dirPath}/h.txt`, (err) => {
//     if (!err) console.log("file name is updated successfully !")
// })

fs.unlinkSync(`${dirPath}/h.txt`)
console.log("File deleted successfully ")

 