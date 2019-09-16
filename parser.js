const fs = require('fs')
const path = require('path')

const parseFile = (file) => {
const csv = fs.readFile(file, {
    encoding: 'utf-8'
}, function (error, data) {
  
    if (error) return console.error(error)
const csvArray = data.split(',');
function getHeaders(arr) {
    let headers = []
    for (let i = 0; i < 9; i++) {
headers.push(arr[i])
console.log(arr[i])
    }
    return headers;
}
const headings = getHeaders(csvArray)

console.log(headings[0])
});


}

parseFile(process.argv[2])