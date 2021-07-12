let express = require('express');
let app = express();
app.set('view engine','ejs');
let products = [{
   name:'betty',
   price:50,
   quantity:12
},{
    name:'betty2',
    price:70,
    quantity:50
}
];
let name = "yordi";
let price = 70;
let description = "This product is awsome product :)";
let id = "id123";
app.get('/',(req,res)=>{
   res.render('shoppingcart.ejs',{products});
});

app.get('/cart',(req,res)=>{
   res.render('product.ejs',{name:name,price:price,id:id,description:description});
});

app.listen(3000);