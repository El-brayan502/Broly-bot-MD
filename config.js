import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['50231458534', '𝑩𝑹𝑶𝑳𝒀', true],
  ['50582340051'], 'EliasarYt', true]] //Numeros de owner 

global.mods = ['18296223945'] 
global.prems = ['18296223945', '595986345191']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝑻𝑯𝑬 𝑩𝑹𝑶𝑳𝒀-𝑩𝑶𝑻°'
global.author = '𝗕𝗿𝗮𝘆𝗮𝗻𝗖𝗵𝗮𝗽𝗶𝗻' 

//--info FG
global.botName = '𝑩𝒓𝒐𝒍𝒚'
global.fgig = 'https://instagram.com/brayanff502' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/Brayancrazzy'
global.fgpyp = 'https://paypal.me/brayancrazzy'
global.fglog = 'https://telegra.ph/file/40c5d1ff195dbc0ac3409.jpg' 

//--- Grupos WA
global.id_canal = '120363312092804854@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W'
global.bgp = 'https://chat.whatsapp.com/LQalZQmmYuqAdvsxyHUjno'
global.bgp2 = 'https://chat.whatsapp.com/LQalZQmmYuqAdvsxyHUjno'
global.bgp3 = 'https://chat.whatsapp.com/LQalZQmmYuqAdvsxyHUjno' //--GT BROLY

global.wait = '🕥 _Cargando..._\n*▬▬▬▭*'
global.rwait = '🕙'
global.dmoji = '🤭'
global.done = '✅'
global.error = '✖️' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
