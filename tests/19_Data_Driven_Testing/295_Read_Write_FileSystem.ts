const fs= require("fs");
// import fs from 'fs';
import path from'path';

const filePath= path.join(__dirname, '293_Users.json');

const fileData= fs.readFileSync(filePath,'utf-8');

const userData= JSON.parse(fileData);
console.log(userData.username);


// Writing Data to a JSON File

const user={
    name:"Pooja",
    role: "QA"
}

//convert JS object to JSON
const jsonData= JSON.stringify(user);

fs.writeFileSync("output.json", jsonData);
console.log("JSON file created succesfully");
