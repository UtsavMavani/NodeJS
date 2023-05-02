const express = require('express');
const app = express();


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//router
const productRouter = require('./routes/productRouter.js');
app.use('/api/products', productRouter);


app.get('/', (req, res) => {
  res.status(200).send('Node Js With Mysql using sequelize.');
});


//Server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running at port no. ${port}`);
});