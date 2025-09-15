// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;H4sIAAAAAAAAA61V2Y6jOBT9F78SdTA7kUoaMCQhS4VspJLRaOSAIQ4EiDHZWvn3Eamq6ZK6p7tGap6Ml3vPuT7n+ivIC1qRIbmCzldQMnrCnDRDfi0J6AC7jmPCQAtEmGPQAatJfE11QSkt14U+L5L5IgkF39wnYcRU6uD1xR/tDukyC5/AvQXKepvR8CcB7SOMnTZ/McPMy1a4va28GZK69pGnyYob0rU0heuoUAxJfAL3JiKmjOaJW+7IgTCcDcnVx5R9Dv7a6U9slkyrha7tR1OH7G/axo126xdZUNV5UjisLZ+pnebLz8Gv2rs6dL1tXuFhb6cHR3tAT2fdDV00eL7K7i1A55oEk3SavMKvaJKTyItIzim/frru6WRQnhjeXpy4p44111S2KrWilGnCBtvuPBmEsZOu5+rL9HPAw1G7bQozRemHI02Q2Xkp8MjM8Kzol/Cy6AZn9+Qs6XFBq4/AffaulfT/1D0dllpiVKMyV631NqOBeb6ifjTUakE+HU2YF6ObMWBjuBp/Dj7cefvaC3Hs9bY14YtkcJz1k7Zg7fYzQVG2dBTukCNLM9v4Bh/zmv0M5VK58O1cDRKy7Omii7aT9mWIrnOLjdJkchFULy+eUyGed5eevYWo8IX2eFIczznRe5Y9bZPwyvVRbK386Cj4cTz2Hcd6ejBKydWLQAfeW4CRhFacYU6LvJkzpBbA0WlOQkb4o7qAG9kJjWfbdI58DPOaZvJgbfYPB1HkF99hC3KAk16uzCPjCbRAyYqQVBWJ+rTiBbuOSVXhhFSg8+fjohrOjBwKTgY0Ah1gQl0UVVOXREP9o/py3mFe4bL8khMOWiBmxWFMQIezmrTA44Ami7ZhS6iral2k65bq2Cp0FIRUs9tVkNQwPLwmXdADqTg+lKADdVU3JVWX5Hvr9+DoQl2TNENTJahJighdZOoyclXF0KEtm8YvcOi/C4ei65boGIrkQEtyJMPRRVu2kGbCrmO4pv5zHCq8/9UCObnwVzs1IpBhC8SUVXyZ12VW4Ojda++LOAyLOufzax6iZkAY6HyYJpzTPKkaZnWOWbijJ4IaHqAT46wi/+qOMBK9c3nrpaiIGjsEvtkTR8gBDfYm0He16UD4fXmyxzZJgpKuQ6jrqqrqZrOzWWiBHDfBQK+Ibn/jtD40pXkD3eSICMc0q0AHIP9oiScPuWNMc2Pd61nLxEKJBb6RfPfwq0lum+dNtvKIX7PDPvdnc3+dBpSgILsUYR/KmrxydodYxfPz0w+CgA44rZeelMkXpWxvJ2Xx3J+Q29RSere8nV1La+aYgr/pCUHvPMVaX97OshApa8GU48DZDDMF3rzR1o50p3uCVlAJCA48K3lqskXkREPyMRmc9k87sV4EQTmSjpRVKBAzIb0cxfi2zFeXPtq9KOOlseu2Ue2X3eFamB3Xl30en4ZmpeGXCgWjY36yinB4StFu4V4M9NZdHt0te3tV6Jvx6eM3puTRpN/u4ZfX+Qq8UZ14b32I8db2/+sZD6XFahPQ/l4/qoV6E5d7adBd50m2CXHfNiOBw0TZ5MIqrcC9kX+ZYR4X7AA6AOcRKx5iYUXdyNjL4+InyZDlee/MM1xx65s1fuA2KL7u8llR9nG1awIo8eC5kfnVKss5x/zdaMBqvuFgDu7/AJ4ldBIaCQAA",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'false' : false, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'false' : false, 
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'false' : false,
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'false' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false': false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'false' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : false,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'false' : false, 
  ANTI_WORD: process.env.ANTI_WORD !== undefined ? process.env.ANTI_WORD === 'true' : true,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "AKUM",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "917005972085",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
