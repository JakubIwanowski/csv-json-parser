const fs = require('fs')
const path = require('path')

const parseFile = (file) => {
const csv = fs.readFile(file, {
    encoding: 'utf-8'
}, function (error, data) {
  
    if (error) return console.error(error)
const csvArray = data.split('\n');
function getHeaders(arr) {
    let headers = [arr[0]]
    headers = headers[0].split(',')
    return headers;
   
}
const headings = getHeaders(csvArray)
csvArray.shift();
let json = [];
let counter = 0
const jsonObject = csvArray.forEach((el) => {

    let splited = el.split(',')
    json[counter] = {}
for (let i = 0; i < headings.length; i ++) {

    json[counter][headings[i]] = splited[i]
}

   counter++
 
    
   
})
json = JSON.stringify(json).replace(/\\r/g, "")

        fs.writeFile('customer-data.json', json, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
});


}

parseFile(process.argv[2])