let handler = async (m, { command, text }) => m.reply(`
*⁉️ 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀𝐒 ⁉️*
  
*𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰:* ${text}
*𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰:* ${['Yes','Maybe','Possibly','Probably not','No','Impossible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <text>?']
handler.tags = ['kerang']
handler.command = /^question|questions|apakah$/i
export default handler