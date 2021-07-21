
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
  Asena.addCommand({pattern: 'tktok ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid);

    var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=a776a857c5afc5855e0eb023&url=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | WhatsAlexa'})

    }));
}
