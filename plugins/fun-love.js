let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ LOVE METER ❤️❤️*
*${text}'s love for you is* *${Math.floor(Math.random() * 100)}%* *100%*
*Should you ask her to be your girlfriend?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler