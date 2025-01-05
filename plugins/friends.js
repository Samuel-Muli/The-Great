const { cmd } = require("../command");

cmd({
    pattern: "family",
    desc: "Samuel Family",
    category: "fun",
    react: "👨‍👩‍👧‍👦",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const familyList = `
         *[ • SAMU 𝖥𝖠𝖬𝖨𝖫𝖸 • ]*

    [ • Close buddies👸 ]
       *•────────────•⟢*
                *𝖥𝖱𝖨𝖤𝖭𝖣’𝖲*
      *╭┈───────────────•*
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *│  ◦* *▢➠ *
      *╰┈───────────────•*
        *•─────Oh Sorry───────•⟢*
        no close friend at the moment
    `;

    try {
        // Envoi de la réponse avec l'image et la liste de la famille
        await conn.sendMessage(m.chat, {
            image: { url: "https://qu.ax/vNzPz.jpg" },
            caption: familyList.trim()
        }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply("❌ *An error occurred while fetching the family list. Please try again.*");
    }
});