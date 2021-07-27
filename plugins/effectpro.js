const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'prologo', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

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
*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .glitch 
🔹𝙐𝙨𝙚➜ Text සිට Tiktok glitch effect..

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .blackpink 
🔹𝙐𝙨𝙚➜ එය සපයා ඇති textයේ black pink logo යවයි.

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .blood 
🔹𝙐𝙨𝙚➜ එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .sandwriting 
🔹𝙐𝙨𝙚➜   එය සපයා ඇති textයේ වැලි රූපයක් යවයි..

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .metald
🔹𝙐𝙨𝙚➜   ඔබේ නම සමඟ iron logo සෑදීම.

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .pornhub
🔹𝙐𝙨𝙚➜   එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lolavatar 
🔹𝙐𝙨𝙚➜ ඔබේ නම සමඟ Avatar logo සෑදිය හැකිය.

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gavatar
🔹𝙐𝙨𝙚➜ .gavatar (.gavatar cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .galaxyneon
🔹𝙐𝙨𝙚➜ (.galaxyneon cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .glue
🔹𝙐𝙨𝙚➜ (.glue cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .graved
🔹𝙐𝙨𝙚➜ (.graved cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .vintage
🔹𝙐𝙨𝙚➜  (.vintage cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .flower
🔹𝙐𝙨𝙚➜ (.flower cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zwolf
🔹𝙐𝙨𝙚➜ (.zwolf king/cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zfire 
🔹𝙐𝙨𝙚➜ (.zwire cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .shadow
🔹𝙐𝙨𝙚➜ (.shadow cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .smoke
🔹𝙐𝙨𝙚➜ (.smoke cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .dropwater
🔹𝙐𝙨𝙚➜ (.dropwater cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .harrypotter 
🔹𝙐𝙨𝙚➜ (.harrypotter cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .beach
🔹𝙐𝙨𝙚➜ (.beach cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .8bit
🔹𝙐𝙨𝙚➜ Text (.8bit king/cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .naruto
🔹𝙐𝙨𝙚➜ (.naruto cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .clight
🔹𝙐𝙨𝙚➜ (.clight cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .marvel
🔹𝙐𝙨𝙚➜   (.marvel king/cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .studiomarvel 
🔹𝙐𝙨𝙚➜   (.studiomarvel king/cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .cloud 
🔹𝙐𝙨𝙚➜   (.cloud cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .snow
🔹𝙐𝙨𝙚➜   .snow cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .battlefield 
🔹𝙐𝙨𝙚➜  (.battlefield king/cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .aov
🔹𝙐𝙨𝙚➜  (.aov cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .csgo
🔹𝙐𝙨𝙚➜ (.csgo cobra)

*━━━━━🐍COBRA LOGO PACK🐍━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}

if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'prologo', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {

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
*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .glitch 
🔹𝙐𝙨𝙚➜ Text සිට Tiktok glitch effect..

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .blackpink 
🔹𝙐𝙨𝙚➜ එය සපයා ඇති textයේ black pink logo යවයි.

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .blood 
🔹𝙐𝙨𝙚➜ එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .sandwriting 
🔹𝙐𝙨𝙚➜   එය සපයා ඇති textයේ වැලි රූපයක් යවයි..

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .metald
🔹𝙐𝙨𝙚➜   ඔබේ නම සමඟ iron logo සෑදීම.

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .pornhub
🔹𝙐𝙨𝙚➜   එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lolavatar 
🔹𝙐𝙨𝙚➜ ඔබේ නම සමඟ Avatar logo සෑදිය හැකිය.

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gavatar
🔹𝙐𝙨𝙚➜ .gavatar (.gavatar cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .galaxyneon
🔹𝙐𝙨𝙚➜ (.galaxyneon cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .glue
🔹𝙐𝙨𝙚➜ (.glue cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .graved
🔹𝙐𝙨𝙚➜ (.graved cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .vintage
🔹𝙐𝙨𝙚➜  (.vintage cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .flower
🔹𝙐𝙨𝙚➜ (.flower cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zwolf
🔹𝙐𝙨𝙚➜ (.zwolf king/cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .zfire 
🔹𝙐𝙨𝙚➜ (.zwire cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .shadow
🔹𝙐𝙨𝙚➜ (.shadow cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .smoke
🔹𝙐𝙨𝙚➜ (.smoke cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .dropwater
🔹𝙐𝙨𝙚➜ (.dropwater cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .harrypotter 
🔹𝙐𝙨𝙚➜ (.harrypotter cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .beach
🔹𝙐𝙨𝙚➜ (.beach cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .8bit
🔹𝙐𝙨𝙚➜ Text (.8bit king/cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .naruto
🔹𝙐𝙨𝙚➜ (.naruto cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .clight
🔹𝙐𝙨𝙚➜ (.clight cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .marvel
🔹𝙐𝙨𝙚➜   (.marvel king/cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .studiomarvel 
🔹𝙐𝙨𝙚➜   (.studiomarvel king/cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .cloud 
🔹𝙐𝙨𝙚➜   (.cloud cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .snow
🔹𝙐𝙨𝙚➜   .snow cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .battlefield 
🔹𝙐𝙨𝙚➜  (.battlefield king/cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .aov
🔹𝙐𝙨𝙚➜  (.aov cobra)

*⚜️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .csgo
🔹𝙐𝙨𝙚➜ (.csgo cobra)

*━━━━━🐍COBRA LOGO PACK🐍━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}

  
    
