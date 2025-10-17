import express from 'express'

const PORT = 2023;
const app = new express();

app.get("/",  (req,res)=>{
  console.log('entering');
   res.send("welcome");
  console.log('going');
})

app.listen( PORT , ()=>{
  console.log(`http://localhost:${PORT}`);
})
   
