let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;BRAYAN-GT⁩;;\nFN:BRAYAN-GT⁩\nORG:BRAYAN-GT⁩\nTITLE:\nitem1.TEL;waid=50231458537:5218261275256\nitem1.X-ABLabel:BRAYAN-GT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:BRAYAN-GT⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おBrayan.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler