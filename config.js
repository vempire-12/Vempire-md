const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVQalVid1N0QVZxaWZWbTNWeWwyV1QrdnhHQk9Vc05oTngvc1NpZWZsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpYMmg3dVZnMGViaEdBOG5Vd3ZNOUd4M3dzQ0FzUmw1eUJCZUFRMTMyQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRG5yT0hLYmlJVHVmQkJLT1lNcXcwOTZDMVMrZ3ZubUlib29aOXI1TUVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhdmhMTU5UWlgwcVlEcVFtNWh2RkNJWmxQeWRxV2IwMG5rQlNGNWxZU0R3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPaVc5WG5IdTFKS3dqc3k4dUs2MWhDNnNYbU91eW5EcmJ3eHNoa2NOM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB3QlZmQ2k5TEo1SzBlRTBwOWRvTWNNY1U4a2xyNllQVzB3K1VBZy9XZ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE05OC9sWGc5eW96b0JCbTAweWVJVUpod3ZUY2NjRmpmTVd3VncvclduVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHhKNlVnMFNudmRHd0ZibzRwVUtTWWlsemlIMnRYRHBZdURleEo4WldRYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5DaDl0cTlvenMrdC9pMG5CSTdIaE4wQy84UGtBbjNCdnp2bkQ2TXhEMHArOUYyWHAxa1ZKZ1NBR2J3RlFvSm9wTkhqZjJLbTVMT2M2T1FYQXpNS0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDcsImFkdlNlY3JldEtleSI6ImdiSDYzVHMyNDV6cGlkVTRxOWtXYU5wdVh1Q1VvNVFNWXdnczlsdktrRGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkRRRVZCWU41IiwibWUiOnsiaWQiOiI5MjMxMzIwMDY2NTk6NTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCO4oCO4riU8J2QlfCdkIDwnZCM8J2Qj/CdkIjwnZCR8J2QhOK4lcKgwqDCoFxu4oCOwqDCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI7wk4ap4oCO8J2Qg/CdkIDwnZCN8J2QhvCdkITwnZCR8J2QjvCdkJTwnZCS8JOGqsKgwqDCoFxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbvCThqnigI7wnZCG8J2QiPCdkJHwnZCLIPCThqpcbuKAjiIsImxpZCI6IjM4MzU4NzU1OTgzOTY6NTZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJTEwzdU1ERUxPQmljVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjYmJVVXBsZDhSSmZsUWRoM2NJV1AwRG5Ba1haUUxqUEpXWlAyV2NlendnPSIsImFjY291bnRTaWduYXR1cmUiOiJISi9oQ3E5Q1ZTZE9kWmlIaENzK2xXQTZWUkF4RmNHcWw0K1ZRa2FPNGgxbmV1UjJhKytRNW5KNjVqVStzaklJaDRJQk5oaTJsWjVEbklNNHUvM3ZCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRkUya2dWU3VmV2pmM1R1MkptUlpnQnVCMngxeHRSbm5EWTlURGp0OG12b2h5ZjNWUmE3SEEvamJnM29rVEdTRlRBTGU1bGR0SFh1a2V4OFUxL2xPRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzIwMDY2NTk6NTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEcyMUZLWlhmRVNYNVVIWWQzQ0ZqOUE1d0pGMlVDNHp5Vm1UOWxuSHM4SSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NDYzODYyLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS1laIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Vempire md🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Vempire md",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Vempire md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923132006659",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ArslanMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ vempire Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
