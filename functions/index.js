import axios from 'axios';
import {
  cfg
} from '../config.js';

const MY_URL = `${cfg.BASE_URL}/bot${cfg.TOKEN}/setWebhook?url=${cfg.URL}`;

export async function connect () {
  try {
    console.log(MY_URL)
    let res = await fetch(MY_URL);
    let data = await res.json();
    console.log(data)
    console.log(MY_URL)
  }catch(err) {
    console.log(err)}
}
async function sendTelegramMessage(botToken, chatId, text) {}



export async function sendMessage(body) {
  try {
    let msgObj = body.message;
    let msgId = msgObj.chat.id;
    let msg = msgObj.text;

    const response = await fetch(`${cfg.BASE_URL}/bot${cfg.TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: msgId, text: `${msg} is replied`, parse_mode: 'HTML'
      })
    });
    return await response.json();

  } catch(err) {
    console.log(err);
  }
}