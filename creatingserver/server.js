const express =require('express');
const app = express();
const path=require('path');
const user=[];
app.use(express.urlencoded({extended:false}))
app.get('/',function(req,res){
    res.write('<html><body><h1>HELLO WORLD !!!!</h1></body></html>')
})

app.listen(5000,function(){
    console.log("server started at Port 5000.......");
})
