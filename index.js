const fs = require('fs');

function transferObject(source, des) {
   const obj = {};
   Object.keys(source).forEach(key => {
      if (des[key] !== undefined) {
         obj[key] = source[key];
      }
   });

   return obj;
}

function transferArrayObject(source, des) {
   const res = [];
   for (let i = 0; i < source.length; i++) {
      const obj = transferObjet(source[i], des);
      res.push(obj);
   }
   return res;
}

function readJsonFromFile(path) {
   const rawData = fs.readFileSync(path);
   const json = JSON.parse(rawData);
   return json;
}

function exportJsonToFile(data, fileName) {
   fs.writeFile(fileName, JSON.stringify(data), function (err) {
      if (err) throw err;
      console.log('complete');
   });
}

const des = readJsonFromFile('./des.json');
const source = readJsonFromFile('./source.json');

const transferResult = transferArrayObject(source, des);

exportJsonToFile(transferResult, 'result.json');
