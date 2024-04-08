const fs=require("fs");

console.log("1");
//blocking
const result=fs.readFileSync("contact.txt","utf-8");

//fs.readFile("contact.txt","utf-8",(err,result) => {console.log(result)});
console.log("2");
console.log(result)

console.log("2");
