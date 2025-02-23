const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "0vJgnB4Q#04Vp_RIvlS6dgB2nAG3VqovRie6zgsrX5InJOKlw4bY",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://qu.ax/SnaGx.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HI DEAR\n IM ONLINE\n\n> The-Great",
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || "/",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
FAKE_TYPING: process.env.FAKE_TYPING || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "The-Great",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_STATUS_LIKE: process.env.AUTO_STATUS_LIKE || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "``",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
