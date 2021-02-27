const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const data = require('./dmSample');

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded(/* {extended: false} */));

app.get('/',(req, res, next) => {
  data.then((data) => {
    res.json(data)
  })
});
app.get('/viewer',(req, res, next) => {
  res.sendFile(path.join(__dirname, 'views','viewer.html'))
});


// app.use('/add-product',(req, res, next) => {
  // console.log('in another middleware?')
  // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
// });
//
// app.use('/product',(req, res, next) => {
  // console.log(req.body)
  // res.redirect('/')
// });



app.listen(8080);
