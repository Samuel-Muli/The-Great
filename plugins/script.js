const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *Samuel Muli*

> *REPO:*
*|* *https://github.com/Samuel-Muli*

> *SUPPORT GROUP:*
*|* *https://chat.whatsapp.com/FV96nX6l7iCGmBeunOFPa0*
*╰──────────────●●►*

> *CREATED BY SaMuTEch*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036@newsletter',
      newsletterName: "ᴄʜᴀɴɴᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'The-Great',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Samuel-Muli" ,
thumbnailUrl: "https://qu.ax/qDGBB.png" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
