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
const jsonObject = csvArray.forEach((el) => {
    let counter = 0
    let splited = el.split(',')
    let arr = for (let i = 0; i < headings.length; i++) {
      
        }
    obj[counter] = {

    }
})
});


}

parseFile(process.argv[2])