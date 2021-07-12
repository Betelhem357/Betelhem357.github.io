let exp = require('express');
let path = require('path');
let app = exp();
const date = new Date();
const hour = date.getHours();
app.use('/css', exp.static(path.join( __dirname,'css')));
app.use(exp.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.get('/',(req,res,next)=>{
    //res.send(html);
    res.render('form.ejs',{time:date.getHours()});
next();
});

app.post('/result',parser);

function parser(req,res){
    //console.log(req.body);
   let name = req.body.name;
   let age = req.body.age;
   console.log("parsed");
   res.redirect('/output/?name='+name+'&age='+age);
   //res.send(`Welcome ${name} age: ${age}`);
}

app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
    name = "person";
    }
    if(!age){
        age = 0;
    }
    res.render('output.ejs',{
        output_name:name,output_age :age
    })
   });

app.listen(3000);