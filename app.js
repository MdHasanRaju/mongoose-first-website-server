const express = require("express");
const mongoose = require("mongoose");
// const productRouter = require("./Resources/products/product.router");
// const userRouter = require("./Resources/users/user.router");
const productsRouter = require("./Resources/products/product.router");
const usersRouter = require("./Resources/users/user.router");
const app = express();

app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(
      `database connected successfully at ${new Date().toLocaleString()}`
    );
  })
  .catch((err) => {
    console.log(err);
  });

  app.use('/api/v1/users', usersRouter)
  app.use('/api/v1/products', productsRouter)

module.exports = app;
