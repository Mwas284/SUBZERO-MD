import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption =  `
╭─[❄️𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐁𝐎𝐓❄️]───╮
 | 
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I\'m ❄️𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐁𝐎𝐓❄️\n⬡│ I\'m up and running! 🚀
│╰────────────────────
┠───[ *BOT INFO* ]────╮
│╭────────────────────
┴│    ❄️𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐁𝐎𝐓❄️
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 𝐌𝐀𝐋𝐈𝐁𝐔
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/𝟐𝟓𝟒𝟕𝟏𝟐𝟕𝟎𝟑𝟐𝟒𝟏
⬡│🙅‍♂️ Don't call the owner or you will be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ *HOW TO USE* ]────⋆
┴│💡 *Some commands you can use:*
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .Ai text \n⬡│- Artificial intelligence 
│╰──────────────
╰────────═┅═───────
*Generated by*𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐁𝐎𝐓🐝
`.trim()
conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/68dad83341e169b2178b2.jpg' }, caption: caption, footer: `Follow me on instagram:\n\tinstagram.com/_m.a.l.i.b.u__` }, { quoted: m })
  //m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler