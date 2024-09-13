import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['50231458537', 'Owner', true],
  ['5491168352204']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50489079501', '573143917092']
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
global.packname = '𝑩𝒓𝒐𝒍𝒚𝑩𝒐𝒕-𝑴𝑫' 
global.author = '𝑩𝒓𝒂𝒚𝒂𝒏𝒀𝒕' 

//--info FG
global.botName = '𝑩𝒓𝒐𝒍𝒚𝑩𝒐𝒕-𝑴𝑫'
global.fgig = 'https://instagram.com/brayanff502' 
global.fgsc = 'https://github.com/El-brayan502/Broly-bot-MD' 
global.fgyt = 'https://youtube.com/Naufrapo'
global.fgpyp = 'https://paypal.me/broly'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '120363312092804854@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W'
global.bgp = 'https://chat.whatsapp.com/LQalZQmmYuqAdvsxyHUjno'
global.bgp2 = 'https://chat.whatsapp.com/LQalZQmmYuqAdvsxyHUjno'
global.bgp3 = 'https://chat.whatsapp.com/LQalZQmmYuqAdvsxyHUjno' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})