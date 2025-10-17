import axios from 'axios';
import {
  cfg
} from '../config.js';

const MY_URL = `${cfg.BASE_URL}/bot${cfg.TOKEN}/setWebhook?url=${cfg.URL}`;

export async function connect () {
  try {
    let res = await fetch(MY_URL);
    let data = await res.json();
    console.log(data)
  }catch(err) {
    console.log(err)}
}