let express = require('express');
let path = require('path');
let app = express();
app.set('view engine','ejs');
app.use('/css', express.static(path.join( __dirname,'css')));
let products = [{
   name:'product',
   price:50,
   quantity:12
},{
    name:'product2',
    price:70,
    quantity:50
}
];
let name = "product1";
let price = 70;
let description = "This product is awsome product :)";
let id = "id123";

app.get('/',(req,res)=>{
   res.render('product.ejs',{name:name,price:price,id:id,description:description});
});

app.get('/cart',(req,res)=>{
   res.render('shoppingcart.ejs',{products});
});

app.post('/addToCart', (req, res, next) => {
   res.redirect('/cart');
});


app.listen(3000);