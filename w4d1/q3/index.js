let express = require('express');
let path = require('path');
const session = require('express-session');
let app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(session({ secret: 'my secret' }));

app.get('/car', (req, res) => {
   let product = {
      name: "Car",
      price: 50,
      id: 12,
      description: "awsome car!"
   };
   res.render('product.ejs', product);
});

app.get('/computer', (req, res) => {
   let product = {
      name: "computer",
      price: 100,
      id: 10,
      description: "awsome computer!"
   };
   res.render('product.ejs',product);
});

app.get('/mobile', (req, res) => {
   let product = {
      name: "mobile",
      price: 120,
      id: 5,
      description: "awsome mobile!"
   };
   res.render('product.ejs', product);
});

app.get('/cart', (req, res) => {
   let products = req.session.cart;
   console.log(products);
   res.render('shoppingcart.ejs', { products });
});

app.post('/addToCart', (req, res) => {
   let name = req.body.name;
   let price = req.body.price;
   let product = { name: name, price: price };
   res.session = req.session;
   if (!res.session.cart) {
      res.session.cart = {};
   }
   let cnt = res.session.cart[name] ? res.session.cart[name].count : 0;
   res.session.cart[name] = { count: cnt + 1, value: product }
   res.redirect('/cart');
});


app.listen(3000);