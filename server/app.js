require("dotenv").config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true,  useUnifiedTopology: true}, ()=>{
    console.log('successfully connected to database👀');
});

const userRouter = require('./routes/User');
app.use('/user', userRouter);


app.listen(process.env.PORT, ()=>{
    console.log('express server started 👌');
});