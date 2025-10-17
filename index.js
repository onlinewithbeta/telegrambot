import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = new express();
const PORT = process.env.PORT || 2023;

app.get("/",  (req,res)=>{
  console.log('entering');
   res.send("v2");
  console.log('going');
})

app.listen( PORT , ()=>{
  console.log(`http://localhost:${PORT}`);
})
   
