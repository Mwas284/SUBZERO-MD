let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	
let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
		let bio = `\n🟢𝐋𝐎𝐍𝐆 𝐁𝐄 𝐒𝐔𝐁𝐙𝐄𝐑𝐎  𝗕𝗢𝗧, 𝗔𝗖𝗧𝗜𝗩𝗘 𝗙𝗢𝗥 ${muptime}\n\n ┃ 🍭 𝐅𝐑𝐎𝐌 𝐌𝐀𝐋𝐈𝐁𝐔`
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1

}
export default handler

function clockString(ms) {
  let 𝒟 = isNaN(𝓂𝓈) ? '--' : Math.floor(𝓂𝓈 / 86400000)
  let ℋ = isNaN(𝓂𝓈) ? '--' : Math.floor(𝓂𝓈 / 3600000) % 24
  let ℳ = isNaN(𝓂𝓈) ? '--' : Math.floor(𝓂𝓈 / 60000) % 60
  let 𝒮  = isNaN(𝓂𝓈) ? '--' : Math.floor(𝓂𝓈 / 1000) % 60
  return [𝒟, ' 𝒟𝒶𝓎𝓈(s) ️', ℋ, ' ℋ𝑜𝓊𝓇(s) ', ℳ, ' ℳ𝒾𝓃𝓊𝓉𝑒𝓈(s)'].map(v => v.toString().padStart(2, 0)).join('')
}