//jshint esversion:6


// fs.copyFileSync("file1.txt", "file2.txt"); //if file2 doesn't exist wil be created if exist will be trunc and replace

// const superheroes = require('superheroes');
// const fes = require('superheroes');

// console.log(fes.all);

const express = require('express');
var bp = require('body-parser');

const fd = express();

fd.use(bp.json());
fd.use(bp.urlencoded({ extended: true }));

fd.get('/', function(req, res){
	res.sendFile(__dirname+"/bmicalculator.html");
});

fd.post('/', function(req, res){
	console.log(req.body);
	res.send("the calculated value is :"+ (parseFloat(req.body.n1)));
});

fd.listen(3000, function(){
	console.log("server start at port 3000");
});
