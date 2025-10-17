import express from 'express'
import dotenv from 'dotenv'
import {
  connect,sendMessage
} from './functions/index.js'
dotenv.config();

const app = new express();
app.use(express.json());

const PORT = process.env.PORT || 2023;

let chat = [{
  text: 'nothing'
}];

app.get("/", (req, res)=> {
  res.send(chat)
  console.log('Chat read');
})

app.post("/", async (req, res)=> {
  chat.push(req.body);
  await sendMessage(req.body)
  console.log('Chat added');
  res.send(chat)
})

app.listen(PORT, async ()=> {
  console.log(`http://localhost:${PORT}`);
  await connect();
})