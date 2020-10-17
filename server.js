const express = require('express');

const app = express();

const mongoose = require('mongoose');

require('dotenv/config');

const cors = require('cors');

// middle wares //

app.use(cors());

// body parser //
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// middle wares //
// middlewares are points/ stops we created in our server to execute some code when a user request a perticular page //

// app.use('/posts',(req,res,next) => {
//   console.log('this is a middleware running...');
//    res.end();
// })

// import routes //
const userRoutes = require('./routes/users');
app.use('/users',userRoutes);

// connect to mongodb //
mongoose.connect(
  process.env.DB_CONNECTION,
{ useNewUrlParser: true,useUnifiedTopology:true }  ,
() => console.log('connected to db'));


app.listen(3000);

