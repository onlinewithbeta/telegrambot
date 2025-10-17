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