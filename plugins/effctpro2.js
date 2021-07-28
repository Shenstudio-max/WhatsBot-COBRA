const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'logopro', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    r_text[1] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    r_text[2] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    r_text[3] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    r_text[4] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    r_text[5] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .breakwall 
🔹𝙐𝙨𝙚➜ (.breakwall cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .flame 
🔹𝙐𝙨𝙚➜ (.flame cobra) 

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zglow 
🔹𝙐𝙨𝙚➜ (.zglow cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .pubg 
🔹𝙐𝙨𝙚➜ (.pubg cobra/bot)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .rainbow
🔹𝙐𝙨𝙚➜ (.rainbow cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .pentakiller
🔹𝙐𝙨𝙚➜ (.pentakiller cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gavatar
🔹𝙐𝙨𝙚➜ (.gavatar cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .woodblock
🔹𝙐𝙨𝙚➜ (.woodblock cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .joker
🔹𝙐𝙨𝙚➜ (.joker cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .coverlol
🔹𝙐𝙨𝙚➜ (.coverlol cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gerband
🔹𝙐𝙨𝙚➜ (.gerband cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .tryposmoke
🔹𝙐𝙨𝙚➜  (.tryposmoke cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .warface
🔹𝙐𝙨𝙚➜ (.warface cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .1917
🔹𝙐𝙨𝙚➜ (.1917 cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .xmas 
🔹𝙐𝙨𝙚➜ (.xmas cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .minion
🔹𝙐𝙨𝙚➜ (.minion cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .sumsand
🔹𝙐𝙨𝙚➜ (.sumsand cobra)

*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}

if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'logopro', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    r_text[1] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    r_text[2] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    r_text[3] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    r_text[4] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    r_text[5] = "https://telegra.ph/file/7e8d54e8d9afe8314fcd0.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .breakwall 
🔹𝙐𝙨𝙚➜ (.breakwall cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .flame 
🔹𝙐𝙨𝙚➜ (.flame cobra) 

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zglow 
🔹𝙐𝙨𝙚➜ (.zglow cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .pubg 
🔹𝙐𝙨𝙚➜ (.pubg cobra/bot)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .rainbow
🔹𝙐𝙨𝙚➜ (.rainbow cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .pentakiller
🔹𝙐𝙨𝙚➜ (.pentakiller cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gavatar
🔹𝙐𝙨𝙚➜ (.gavatar cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .woodblock
🔹𝙐𝙨𝙚➜ (.woodblock cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .joker
🔹𝙐𝙨𝙚➜ (.joker cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .coverlol
🔹𝙐𝙨𝙚➜ (.coverlol cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gerband
🔹𝙐𝙨𝙚➜ (.gerband cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .tryposmoke
🔹𝙐𝙨𝙚➜  (.tryposmoke cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .warface
🔹𝙐𝙨𝙚➜ (.warface cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .1917
🔹𝙐𝙨𝙚➜ (.1917 cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .xmas 
🔹𝙐𝙨𝙚➜ (.xmas cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .minion
🔹𝙐𝙨𝙚➜ (.minion cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .sumsand
🔹𝙐𝙨𝙚➜ (.sumsand cobra)

*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}

  
