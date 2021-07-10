let express = require('express');
let app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/',(req,res,next)=>{
 res.send('<form action="/result" method="post"><label>Name</label><input type="text" name="name" id="name"/><label>Age</label><input type="number" id="age" age:"age"/><input type="submit" value="submit Query"/></form>');
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