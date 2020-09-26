const fs = require('fs');
// const path = require('crypto');
const path=require('path');


// create folder

// fs.mkdir(path.join(__dirname,'/test'),{},function(err){
//     if(err)throw err;
//     console.log('Folder created ');
// })

// create and write in a file


// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world!!!',function(err){
//     if(err)throw err;
//     console.log('File created....');
// })
 

// read file


fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',function(err,data){
    if(err)throw err;
    console.log(data);
}) 
 

