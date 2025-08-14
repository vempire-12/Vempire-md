const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUdXZ3dYVUFaMHVMVHh0d0VMMFN6cS9KTGl2NGI4bDVPejVUOUd0ckdWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDZoc0tuVkw4TThKTVJRNEZ0S1ZCaEUvbFgxRHlhS2xQVlFYR01tcW1pcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSVdUUmRYZFU5T01BdTBGRkFqSEhVWVRKYU95YjFzRkdDVDlFdlU5OVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUjFmdXlYNkkvK095ZEdCczd1Vml1dDBZTU5wRnJlNnZhaHhSQjlRUGtjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HVUwveWxrcWRVcmJWWkxVMThickc2Z3RFdDNwcXprNDVtSjk4MGVVV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJEUWoyWWM3ZFNDOVNIL1hiYk1pN0Z0UXNhTEFPUkZZUk1lZTMyaGllakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9xTFIxRmFaNENrNWZMZGhmUi95bmlLNWpLbmU2UlNTZ1E3QkM2enYxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkkydmVMWDBvQ1lEM3RBZE5BMFk4ekEvclI0Yjg0WFdXZjVlVlhaYVh6Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVNZjBmeVZwT1JuS3hCRzZIamdpbGwvTHdwZkEwWTFab2pSSkRhUEFqN3ZJUlM4d28vK0krVldnbUFlZk8vSmRhZWxjaDhqTjZQaWtZM2NiVFJTQWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6IldTM3hIOEN6RUtKTHpPRnMvM1FIY2p4c2MvYWJxSnRYRzZBOWI1RjYySTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkZMWDZDRFlKIiwibWUiOnsiaWQiOiI5MjMxMzIwMDY2NTk6NDlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic2FkIGdpcmwiLCJsaWQiOiIzODM1ODc1NTk4Mzk2OjQ5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHZLM3VNREVQbkk5Y1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY2JiVVVwbGQ4UkpmbFFkaDNjSVdQMERuQWtYWlFMalBKV1pQMldjZXp3Zz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWjdHQXhxR1BqK3VBQkYzK2dBdVVuMU5VOXpST3dqWm1zQ242UlM2dkpib0JYam5xSlV6VjNBWXBINXE3Z2hTSndvZUswbGp2V1lxVDlTYWlkOVExRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjF5bXpPSW8xa3kxM294VjlyWWpRK0IwREFoWmpqckdDaVpQQnVES1ZiVERxNkh2R25EK09NS0JyQmdQTFFERXI5YVVwV0dMQThYT2ZhWnFLK0Qxa2lnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTMyMDA2NjU5OjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhHMjFGS1pYZkVTWDVVSFlkM0NGajlBNXdKRjJVQzR6eVZtVDlsbkhzOEkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTE0NTM0MiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBodyJ9",
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
