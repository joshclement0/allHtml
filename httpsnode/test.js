var express = require('express');
var url = require('url');
var app = express();
app.listen(80);
app.get('/', function(req,res){
    res.send("This is a test to save data");
    console.log("request received");
    res.send(data);
});

var data=[{title:"here"},{name:"Jill"},{coworker:"phill"}];