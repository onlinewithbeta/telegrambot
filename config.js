import dotenv from 'dotenv';
dotenv.config();

export const cfg = {
  TOKEN:process.env.TOKEN,
  URL:process.env.URL,
  BASE_URL:process.env.BASE_URL,
};
console.log(cfg,dotenv.config(),process.env)