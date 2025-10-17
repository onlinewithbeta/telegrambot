import axios from 'axios';
import {
  cfg
} from '../config.js';

const MY_URL = `${cfg.BASE_URL}${cfg.TOKEN}/setWebhook?url=${cfg.URL}`;

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




export async function sendMessage(body) {
  try {
    let msgObj = body.message;
    let msgId = msgObj.chat.id;
    let msg = msgObj.text;
    function axsInst() {
      return {
        get(method, params) {
          return axios.get(`/${method}`, {
            baseUrl: cfg.BASE_URL,
            params,
          });
        },
        post(method, data) {
          return axios( {
            method: 'POST',
            baseUrl: cfg.BASE_URL,
            url: `/${method}`,
            data,
          });
        },
      }
    }

    await axsInst.get("sendmessage", {
      chat: msgId,
      text: `${msg} Replied ++`
    })

  }catch(err) {
    console.log(err)
  }

}