let handler = async (m, { args, usedPrefix, command }) => {
  let user = m.mentionedJid[0] || m.chat;
  let txt = `🟢 Iniciando hackeo a @${user.split('@')[0]}...\n`;
  txt += '🔍 Buscando archivos secretos...\n';
  txt += '💾 Descargando historial de chats...\n';
  txt += '📂 Encontrando memes prohibidos...\n';
  txt += '✅ Hackeo completo.';
  m.reply(txt, null, { mentions: [user] });
};
handler.command = /^hackear$/i;
export default handler;