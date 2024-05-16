const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_03_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICA0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3LFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMixcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICA5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2LFxuICAgICAgICA0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICA3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIncxOE8zWk9EemZwNC9sVlNPWGsyNlYzL0lyYUUweTZBZTlzdEpYN24wV3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImUxTlFfQ3hIUzctOVpaZVJHblBwTlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWFiMzQ5ZTYtYWM3MS00ZDhmLTg1YzMtYjEwZDk3NmEwYTFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMjI2LFxuICAgICAgMjM1LFxuICAgICAgMzUsXG4gICAgICAxMDQsXG4gICAgICA1NSxcbiAgICAgIDEyMSxcbiAgICAgIDI0MyxcbiAgICAgIDQ3LFxuICAgICAgMjYsXG4gICAgICAxNzYsXG4gICAgICAxMzcsXG4gICAgICAxMzEsXG4gICAgICAxOTgsXG4gICAgICA4LFxuICAgICAgMTYsXG4gICAgICAxNjMsXG4gICAgICAxMjAsXG4gICAgICAyMTMsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDExNixcbiAgICAgIDIzMCxcbiAgICAgIDg0LFxuICAgICAgMTQ4LFxuICAgICAgNjMsXG4gICAgICAyNTUsXG4gICAgICAwLFxuICAgICAgMTIwLFxuICAgICAgMjM5LFxuICAgICAgNTcsXG4gICAgICA2MyxcbiAgICAgIDIwNCxcbiAgICAgIDE0NixcbiAgICAgIDIwOCxcbiAgICAgIDIwMyxcbiAgICAgIDE4MyxcbiAgICAgIDI2LFxuICAgICAgMjE1LFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLWC8zcWdHRUl2Tm1iSUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1HMWgwMmRMZTc5am8wdUFVTzZMVWQyYnZ3emV1UW55T0RtdWRHUHFEQUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaGd4WnVaV3hwdGxZUEhUYkV3eDBMczBtVGJrYkRwNmxBQVUwampMS1NwQkdLZitmbGtHakdaaFJpTGp3VGNkSTRFaXRpZm1RUW9nczVNVFBXTzNUQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT2F6OEc3S2lKRXV1bUtrVzVDc0tHRmU2M1gyWHBSaEs0UmxwN3FkMnJFcTluSVJLWUFTN1VoZ1drQW4zZi90M0JudnZqN2o5VUZ3aENudXVDeEh4amc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI0MjY5MTQ4OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVEVOTkVUXCIsXG4gICAgXCJsaWRcIjogXCI2MjE1MjgwNzMwOTU1MzozM0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjQyNjkxNDg6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU4ODk4MDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLMnZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUsydi5qc29uIjogIntcImtleURhdGFcIjpcIlhSUnJVcHJKalVpVkhGaWhUcWpCNE9qbjUrN1lraGRBeWM0SGp0dUVaTWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5NjA1NTIwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzJ3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVmpEcDZjSGRQT3pTL3gyZzl0eXFrdHZuUzc1Zit2MTlIbk1CYkwyNGxqZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjk2MDU1MjA1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxMzk4MzcwNDAzMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUsyeC5qc29uIjogIntcImtleURhdGFcIjpcIlR1cjJoakx2M1N4R0VsbnJ2d0ZVdXk2WUpSM0ZaMy9QN0xrK1B5d2RMWVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5NjA1NTIwNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzEzOTgzNzA2NDEzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
