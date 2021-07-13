let express = require('express');
const cookiparser = require('cookie-parser');
let app = express();
app.use(express.urlencoded({extended:false}));
app.use(cookiparser());
let cookies  = [];
app.post('/' , (req , res)=>{
      let key = req.body.key;
      let value = req.body.value;
      //cookies.push({key:key,value:value});
      res.cookie(key,value);
      res.redirect('/');
})

app.get('/' , (req , res)=>{
      if(req.cookies){
            cookies = req.cookies ;
      }
       res.render('cookie.ejs',{cookies:cookies});
})

app.listen(3000);