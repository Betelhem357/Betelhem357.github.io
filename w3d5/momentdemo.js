// let moment = require('moment');
// console.log(moment().format("ddd , hA"));
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8080);
//app.set('query parser', false);
//app.set('query parser', 'simple');
app.set('query parser','extended');
const port = app.get('port');
app.get("/",function(req,res){
   console.log("fjgihfgiufihg");
   console.log(req.query);
   res.send("HOME PAGE");
});

app.listen(port,()=>{
    console.log("jhgrehgfdjghjfdhjghfj");
});


console.log(port);
console.log( process.env.PORT);