import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() =>{
    console.log('Connected succc')
  })
  .catch((err) => {
    console.log(err)
  });

const app = express();

app.listen(3000, () =>{
    console.log('server runing at port 3000')
})