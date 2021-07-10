let express = require('express');
let path = require('path');
let app = express();
const date = new Date();
const hour = date.getHours();
app.use('/css', express.static(path.join( __dirname,'css')));
let link;
if(6<hour&&hour<18){
        link = '<link href="css/day.css" rel="stylesheet"/>';
}else{
    link = '<link href="css/night.css" rel="stylesheet"/>';
}
let html = '<!DOCTYPE html>'+
'<html lang="en">'+
'<head>'+
'    <meta charset="UTF-8">'+
'    <meta http-equiv="X-UA-Compatible" content="IE=edge">'+
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">'+
'    <title>Document</title>'+
link +
'</head>'+
'<body>'+
'    <form action="/result" method="post">'+
'            <label>Name</label>'+
'            <input type="text" name="name" id="name" />'+
'            <label>Age</label>'+
'            <input type="number" id="age" name:"age" />'+
'        <input type="submit" value="submit Query" />'+
'    </form> '+
'</body>'+
'</html>';
	


app.use(express.urlencoded({ extended: false }));
app.get('/',(req,res,next)=>{
    res.send(html);
next();
});

app.use('/result',parser);

function parser(req,res){
    //console.log(req.body);
   let name = req.body.name;
   let age = req.body.age;
   res.send(`Welcome ${name} age: ${age}`);
}

app.listen(3000);