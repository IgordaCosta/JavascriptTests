

const fs = require("fs")




function CreateJasonFile(data, dataName, fileName){

var result = {};
dataName.forEach((dataName, i) => result[dataName] = data[i]);

const jsonString = JSON.stringify(result)


fs.writeFileSync(fileName, jsonString)

}


let dataName = ['Igor', 'Thais', 'Graca'];
let data = [18, 19, 20];

let fileName = './newCustomer.json';

CreateJasonFile(data, dataName, fileName)