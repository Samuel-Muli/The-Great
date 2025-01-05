const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs The-Great*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ➠ SaMu*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ MULI.*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ Not Available*
*│  ◦* *ᴀɢᴇ➠ ᴛᴡᴇɴᴛʏ FOUR*
*│  ◦* *ᴄɪᴛʏ➠ Kibwezi*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

        *[ •  • ]*
*╭┈───────────────•*
*│  ◦* *▢➠SaMu*
*│  ◦* *▢➠ɴᴏᴛʜɪɴɢ*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ SaMuTech
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
