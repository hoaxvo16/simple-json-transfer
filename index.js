const fs = require('fs');

function transferObjet(source, des) {
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

const a = [
   {
      a: 1,
      b: 2,
      c: 3,
   },
];
const b = {
   a: 1,
   b: 2,
};

const c = transferArrayObject(a, b);

const JSONString = JSON.stringify(c);

console.log(c);

fs.writeFile('output.json', JSONString, function (err) {
   if (err) throw err;
   console.log('complete');
});
