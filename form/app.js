const express =require('express');
const app = express();
const path=require('path');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',function(req,res){
   res.sendFile(path.join(__dirname,'./','index.html'));
})

app.get('/welcome',function(req,res){
    res.sendFile('welcome.html');
})
app.post('/login',async (req,res) => {
  var myData = new User(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
   

})
app.listen(5000,function(){
    console.log("server started");
})
