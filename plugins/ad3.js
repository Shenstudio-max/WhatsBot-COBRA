/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/
const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {
   Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
   Asena.addCommand({pattern: 'zwolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
   Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
      Asena.addCommand({pattern: 'dropwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
   Asena.addCommand({pattern: 'flower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
      Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
      Asena.addCommand({pattern: 'flame ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
   Asena.addCommand({pattern: 'zglow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
      Asena.addCommand({pattern: 'clight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
   Asena.addCommand({pattern: 'wfire ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
}

if (Config.WORKTYPE == 'public') {
   
   Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
   Asena.addCommand({pattern: 'zwolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
   Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
      Asena.addCommand({pattern: 'dropwater ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
   Asena.addCommand({pattern: 'flower ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
      Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
      Asena.addCommand({pattern: 'flame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
   Asena.addCommand({pattern: 'zglow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
      Asena.addCommand({pattern: 'clight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
   
   Asena.addCommand({pattern: 'wfire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=ZKgeixXNpKPOs2Xt7HgUIiBaJ6w&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 🐍COBRABOT🐍'})

    }));
}
