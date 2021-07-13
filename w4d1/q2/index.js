let express = require('express');
const session = require('express-session');
let path = require('path');
let app = express();
const date = new Date();
const hour = date.getHours();
app.use('/css', express.static(path.join( __dirname,'css')));
app.use(express.urlencoded({ extended: false }));
app.use(session({secret:'my secret'}));
app.get('/',(req,res,next)=>{
    res.render('index.ejs',{hour:hour});
next();
});

app.post('/result',(req,res,next)=>{
    let name = req.body.name;
    let age = req.body.age;
    //res.redirect('/output?name='+name+'&'+'age='+age);
    res.session = req.session;
    res.session.name = name;
    res.session.age = age;
    res.redirect('/output');
});

app.get('/output', (req, res) => {
    let name = req.session.name;
    let age = req.session.age;
    if (!name) {
    name = "person";
    }
    if(!age){
        age = 0;
    }
    res.send(`Welcome ${name} age: ${age}`);
   });

app.listen(3000);