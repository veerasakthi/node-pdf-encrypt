// when deploying in aws "./tmp/ change to "/tmp/"
const HummusRecipe = require('hummus-recipe');
const fs = require('fs');

const base64String = require("./data.json");

const base64 = base64String.base64Pdf;

let buffBase64 = Buffer.from((base64.replace(/^data:application\/pdf;base64,/, "")), 'base64');
fs.writeFileSync('./tmp/sample.pdf', buffBase64);

const pdfDoc = new HummusRecipe('./tmp/sample.pdf', './tmp/output.pdf');

pdfDoc
    .encrypt({
        userPassword: '123',
        ownerPassword: '123',
        userProtectionFlag: 4
    })
    .endPDF();

let buffFile = fs.readFileSync('./tmp/output.pdf');
let base64data = buffFile.toString('base64');

console.log("DONE....", base64data);


// OLD

// const HummusRecipe = require('hummus-recipe');
// const fs = require('fs');
// const pdfDoc = new HummusRecipe('sample.pdf', 'output.pdf');

// pdfDoc
//     .encrypt({
//         userPassword: '123',
//         ownerPassword: '123',
//         userProtectionFlag: 4
//     })
//     .endPDF();

// let buffFile = fs.readFileSync('output.pdf');
// let base64data = buffFile.toString('base64');

// console.log("DONE....", base64data);
