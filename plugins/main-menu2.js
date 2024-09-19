let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
≡ Use estos comandos sin el prefijo: *${usedPrefix}*
╭━━━〔 ADUIOS 〕━━━◉
┃╭━━━━━━━━━━━━━━━━━ 
┃┃ Bot
┃┃ Buenos días
┃┃ Buenas tardes 
┃┃ Buenas noches
┃┃ Fino señores
┃┃ Sad
┃┃ Motivación
┃┃ fiesta viernes
┃┃ Uwu
┃┃ Estoy triste
┃┃ un Pato
┃┃ ara ara
┃┃ Bueno master
┃┃ Calla Fan de bts
┃┃ Tengo los calzones
┃╰──────────────
╰━━━━━━━━━━━━━━◉
`
m.react('🍂')
    let pp = 'https://qu.ax/cBzx.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)

}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler