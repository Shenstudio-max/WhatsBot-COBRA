/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('conventer');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'admin$', fromMe: true, desc: Lang.ADMIN_DESC}, (async (message, match) => {    
        if (Config.LANG == 'HI' || Config.LANG == 'EN') {
            await message.sendMessage('*◁WhatsAlexa Admin Panel▷*\n\n*🧞‍♀️විධානය* : .ban\n*💠විස්තරය* : ```කණ්ඩායමේ කෙනෙකු ඉවත් කරන්න. පණිවිඩය mention දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයකු ටැග් කරන්න```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .mute\n*💠විස්තරය* : ```කණ්ඩායමේ chat නිශ්ශබ්ද කරන්න. පණිවිඩය යැවිය හැක්කේ admin පමණි```\n\n*🧞‍♀️විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීම ඉවත් කිරීම. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැකිය.```\n\n*🌀විධානය* : .clear\n*💠විස්තරය* : ```Chat මකා දමයි.```\n\n*🧞‍♀️විධානය* : .promote\n*💠විස්තරය* : ```සාමාජිකයන් admin කරයි.```\n\n*🧞‍♀️විධානය* : .demote\n*💠විස්තරය* : ```Admin සාමාජිකයකු බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .plugin\n*💠විස්තරය* : ```plugin ස්ථාපනය කරන්න.```\n\n*🧞‍♀️විධානය* : .remove\n*💠විස්තරය* : ```plugin ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ ආරාධනා ලින්කුව සපයයි.```\n\n*🧞‍♀️විධානය* : .afk\n*💠විස්තරය* : ```එය bot AFK බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .restart\n*💠විස්තරය* : ```Restart the bot.```\n\n*🧞‍♀️විධානය* : .shutdown\n*💠විස්තරය* : ```Shutdown the Bot.```\n\n*🧞‍♀️විධානය* : .setvar\n*💠විස්තරය* : ```Heroku config vars සකසන්න.```\n\n*🧞‍♀️විධානය* : .getvar\n*💠විස්තරය* : ```Heroku config var ලබා ගන්න```\n\n*🧞‍♀️විධානය* : .speedtest\n*💠විස්තරය* : ``` Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.```\n\n*🧞‍♀️විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filter word ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලිවුවහොත් එය ඔබගේ filters ලැයිස්තුව පෙන්වනු ඇත.```\n\n*🧞‍♀️විධානය* :  .stop\n*💠විස්තරය* : ``` ඔබ කලින් එකතු කළ filters නවත්වයි.```\n\n*🧞‍♀️විධානය* :  .welcome\n*💠විස්තරය* : ``` එය පිළිගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .kickme\n*💠විස්තරය* : ```එය විධානය ලබා දී ඇති කණ්ඩායමෙන් bot ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .pp\n*💠විස්තරය* : ```ඔබ mention සපයන ඡායාරූපය, bot profile ඡායාරූපය කරයි.```\n\n*🧞‍♀️විධානය* : .block\n*💠විස්තරය* : ```Block tagged user.```\n\n*🧞‍♀️විධානය* : .unblock\n*💠විස්තරය* : ```Unblock tagged user.```\n\n*🧞‍♀️විධානය* : .jid\n*💠විස්තරය* : ```පරිශීලකයාගේ JID ලබා දෙයි.```\n\n*🧞‍♀️විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි.```\n\n*🧞‍♀️විධානය* : .update\n*💠විස්තරය* : ```Updates පරීක්ෂා කරයි.```\n\n*🧞‍♀️විධානය* : .update now\n*💠විස්තරය* : ```එය බොට් update කරයි.```\n\n*🧞‍♀️විධානය* : .dyno\n*💠විස්තරය* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .sysd\n*💠විස්තරය* : ```පද්ධති සංඛ්යාලේඛන පෙන්වීම```');
        } else { 
            await message.sendMessage('*◁WhatsAlexa Admin Panel▷*\n\n*🧞‍♀️command* : .ban\n*💠usage* : ```Remove someone from the group. Mention the message or tag a person to use the command```\n\n*🧞‍♀️command* : .add\n*💠ussage* : ```Adds someone to the group```\n\n*🧞‍♀️command* : .mute\n*💠usage* : ```Mute group chat. Only admin can send message```\n\n*🧞‍♀️command* : .unmute\n*💠ussage* : ```Remove group chat mute. Anyone can send a messae```\n\n*🌀command* : .clear\n*💠ussage* : ```Chat clear.```\n\n*🧞‍♀️command* : .promote\n*💠ussage* : ```Members admin.```\n\n*🧞‍♀️command* : .demote\n*💠ussage* : ```Makes the admin a member.```\n\n*🧞‍♀️command* : .plugin\n*💠ussage* : ```Install the plugin.```\n\n*🧞‍♀️command* : .remove\n*💠ussage* : ```remove plugin.```\n\n*🧞‍♀️command* : .invite\n*💠ussage* : ```Provides group invitation link.```\n\n*🧞‍♀️command* : .afk\n*💠ussage* : ```It turns bot bot AFK.```\n\n*🧞‍♀️command* : .restart\n*💠ussage* : ```Restart the bot.```\n\n*🧞‍♀️command* : .shutdown\n*💠ussage* : ```Shutdown the Bot.```\n\n*🧞‍♀️command* : .setvar\n*💠ussage* : ```Heroku config vars.```\n\n*🧞‍♀️command* : .getvar\n*💠ussage* : ```Get Heroku config var. ```\n\n*🧞‍♀️command* : .speedtest\n*💠ussage* : ``` Measuring download and upload speeds.```\n\n*🧞‍♀️command* : .filter\n*💠ussage* : ```It adds filters. If someone writes your filter word, it sends the answer. If you write a .filter it will show your list of filters.```\n\n*🧞‍♀️command* :  .stop\n*💠ussage* : ``` Stops the filters you added earlier.```\n\n*🧞‍♀️command* :  .welcome\n*💠ussage* : ``` It sets the welcome message.```\n\n*🧞‍♀️command* : .goodbye\n*💠ussage* : ```In sets the goodbye message.```\n\n*🧞‍♀️command* : .kickme\n*💠ussage* : ```It removes the bot from the command group.```\n\n*🧞‍♀️command* : .pp\n*💠ussage* : ```The photo you mention mentions the bot profile photo.```\n\n*🧞‍♀️command* : .block\n*💠ussage* : ```Block tagged user.```\n\n*🧞‍♀️command* : .unblock\n*💠ussage* : ```Unblock tagged user.```\n\n*🧞‍♀️command* : .jid\n*💠ussage* : ```Provides the user Jid```\n\n*🧞‍♀️command* : .tagall\n*💠ussage* : ```tag all members in the grp.```\n\n*🧞‍♀️command* : .update\n*💠ussage* : ```check updates.```\n\n*🧞‍♀️command* : .update now\n*💠ussage* : ```update your bot.```\n\n*🧞‍♀️command* : .dyno\n*💠ussage* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️command* : .add\n*💠ussage* : ```add user in group```\n\n*🧞‍♀️command* : .sysd\n*💠ussage* : ```Displaying system statistics```');
        }
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'admin$', fromMe: true, desc: Lang.ADMIN_DESC}, (async (message, match) => {    
        if (Config.LANG == 'HI' || Config.LANG == 'EN') {
            await message.sendMessage('*◁WhatsAlexa Admin Panel▷*\n\n*🧞‍♀️විධානය* : .ban\n*💠විස්තරය* : ```කණ්ඩායමේ කෙනෙකු ඉවත් කරන්න. පණිවිඩය mention දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයකු ටැග් කරන්න```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .mute\n*💠විස්තරය* : ```කණ්ඩායමේ chat නිශ්ශබ්ද කරන්න. පණිවිඩය යැවිය හැක්කේ admin පමණි```\n\n*🧞‍♀️විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීම ඉවත් කිරීම. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැකිය.```\n\n*🌀විධානය* : .clear\n*💠විස්තරය* : ```Chat මකා දමයි.```\n\n*🧞‍♀️විධානය* : .promote\n*💠විස්තරය* : ```සාමාජිකයන් admin කරයි.```\n\n*🧞‍♀️විධානය* : .demote\n*💠විස්තරය* : ```Admin සාමාජිකයකු බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .plugin\n*💠විස්තරය* : ```plugin ස්ථාපනය කරන්න.```\n\n*🧞‍♀️විධානය* : .remove\n*💠විස්තරය* : ```plugin ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ ආරාධනා ලින්කුව සපයයි.```\n\n*🧞‍♀️විධානය* : .afk\n*💠විස්තරය* : ```එය bot AFK බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .restart\n*💠විස්තරය* : ```Restart the bot.```\n\n*🧞‍♀️විධානය* : .shutdown\n*💠විස්තරය* : ```Shutdown the Bot.```\n\n*🧞‍♀️විධානය* : .setvar\n*💠විස්තරය* : ```Heroku config vars සකසන්න.```\n\n*🧞‍♀️විධානය* : .getvar\n*💠විස්තරය* : ```Heroku config var ලබා ගන්න```\n\n*🧞‍♀️විධානය* : .speedtest\n*💠විස්තරය* : ``` Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.```\n\n*🧞‍♀️විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filter word ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලිවුවහොත් එය ඔබගේ filters ලැයිස්තුව පෙන්වනු ඇත.```\n\n*🧞‍♀️විධානය* :  .stop\n*💠විස්තරය* : ``` ඔබ කලින් එකතු කළ filters නවත්වයි.```\n\n*🧞‍♀️විධානය* :  .welcome\n*💠විස්තරය* : ``` එය පිළිගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .kickme\n*💠විස්තරය* : ```එය විධානය ලබා දී ඇති කණ්ඩායමෙන් bot ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .pp\n*💠විස්තරය* : ```ඔබ mention සපයන ඡායාරූපය, bot profile ඡායාරූපය කරයි.```\n\n*🧞‍♀️විධානය* : .block\n*💠විස්තරය* : ```Block tagged user.```\n\n*🧞‍♀️විධානය* : .unblock\n*💠විස්තරය* : ```Unblock tagged user.```\n\n*🧞‍♀️විධානය* : .jid\n*💠විස්තරය* : ```පරිශීලකයාගේ JID ලබා දෙයි.```\n\n*🧞‍♀️විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි.```\n\n*🧞‍♀️විධානය* : .update\n*💠විස්තරය* : ```Updates පරීක්ෂා කරයි.```\n\n*🧞‍♀️විධානය* : .update now\n*💠විස්තරය* : ```එය බොට් update කරයි.```\n\n*🧞‍♀️විධානය* : .dyno\n*💠විස්තරය* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .sysd\n*💠විස්තරය* : ```පද්ධති සංඛ්යාලේඛන පෙන්වීම```');
        } else { 
            await message.sendMessage('*◁WhatsAlexa Admin Panel▷*\n\n*🧞‍♀️command* : .ban\n*💠usage* : ```Remove someone from the group. Mention the message or tag a person to use the command```\n\n*🧞‍♀️command* : .add\n*💠ussage* : ```Adds someone to the group```\n\n*🧞‍♀️command* : .mute\n*💠usage* : ```Mute group chat. Only admin can send message```\n\n*🧞‍♀️command* : .unmute\n*💠ussage* : ```Remove group chat mute. Anyone can send a messae```\n\n*🌀command* : .clear\n*💠ussage* : ```Chat clear.```\n\n*🧞‍♀️command* : .promote\n*💠ussage* : ```Members admin.```\n\n*🧞‍♀️command* : .demote\n*💠ussage* : ```Makes the admin a member.```\n\n*🧞‍♀️command* : .plugin\n*💠ussage* : ```Install the plugin.```\n\n*🧞‍♀️command* : .remove\n*💠ussage* : ```remove plugin.```\n\n*🧞‍♀️command* : .invite\n*💠ussage* : ```Provides group invitation link.```\n\n*🧞‍♀️command* : .afk\n*💠ussage* : ```It turns bot bot AFK.```\n\n*🧞‍♀️command* : .restart\n*💠ussage* : ```Restart the bot.```\n\n*🧞‍♀️command* : .shutdown\n*💠ussage* : ```Shutdown the Bot.```\n\n*🧞‍♀️command* : .setvar\n*💠ussage* : ```Heroku config vars.```\n\n*🧞‍♀️command* : .getvar\n*💠ussage* : ```Get Heroku config var. ```\n\n*🧞‍♀️command* : .speedtest\n*💠ussage* : ``` Measuring download and upload speeds.```\n\n*🧞‍♀️command* : .filter\n*💠ussage* : ```It adds filters. If someone writes your filter word, it sends the answer. If you write a .filter it will show your list of filters.```\n\n*🧞‍♀️command* :  .stop\n*💠ussage* : ``` Stops the filters you added earlier.```\n\n*🧞‍♀️command* :  .welcome\n*💠ussage* : ``` It sets the welcome message.```\n\n*🧞‍♀️command* : .goodbye\n*💠ussage* : ```In sets the goodbye message.```\n\n*🧞‍♀️command* : .kickme\n*💠ussage* : ```It removes the bot from the command group.```\n\n*🧞‍♀️command* : .pp\n*💠ussage* : ```The photo you mention mentions the bot profile photo.```\n\n*🧞‍♀️command* : .block\n*💠ussage* : ```Block tagged user.```\n\n*🧞‍♀️command* : .unblock\n*💠ussage* : ```Unblock tagged user.```\n\n*🧞‍♀️command* : .jid\n*💠ussage* : ```Provides the user Jid```\n\n*🧞‍♀️command* : .tagall\n*💠ussage* : ```tag all members in the grp.```\n\n*🧞‍♀️command* : .update\n*💠ussage* : ```check updates.```\n\n*🧞‍♀️command* : .update now\n*💠ussage* : ```update your bot.```\n\n*🧞‍♀️command* : .dyno\n*💠ussage* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️command* : .add\n*💠ussage* : ```add user in group```\n\n*🧞‍♀️command* : .sysd\n*💠ussage* : ```Displaying system statistics```');
        }
    }));
}
