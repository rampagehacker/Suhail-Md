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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_41_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5LFxuICAgICAgICA0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjA4LFxuICAgICAgICA2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgMTU2LFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg1LFxuICAgICAgICA4MixcbiAgICAgICAgMTAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk3LFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDc5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiajA2Vjd6bFY3bG1xWTdtVDJvcXhRZHZsTXFHTW9LU054N3kwTmdLWU04WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR1VJdFN2WElTOGlSRWE0b1RBYWE5Z1wiLFxuICBcInBob25lSWRcIjogXCJjNWUxZDk5Ny0xOTM1LTRjZDgtYmQ2YS0xMDJjMDUzMjhjYThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDkyLFxuICAgICAgMTcsXG4gICAgICAyMDYsXG4gICAgICAxMzYsXG4gICAgICAxODUsXG4gICAgICAyMjksXG4gICAgICAxNDAsXG4gICAgICA2OCxcbiAgICAgIDcwLFxuICAgICAgMTI3LFxuICAgICAgMTYzLFxuICAgICAgOTEsXG4gICAgICAxNTcsXG4gICAgICAyNDAsXG4gICAgICAyMDMsXG4gICAgICAyMjcsXG4gICAgICA1MCxcbiAgICAgIDY1LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDE1OSxcbiAgICAgIDI0MixcbiAgICAgIDU1LFxuICAgICAgMTQ2LFxuICAgICAgMTIxLFxuICAgICAgMTIyLFxuICAgICAgMTc2LFxuICAgICAgMjI4LFxuICAgICAgNjksXG4gICAgICAyMTEsXG4gICAgICAzOSxcbiAgICAgIDE0NixcbiAgICAgIDY2LFxuICAgICAgOSxcbiAgICAgIDksXG4gICAgICAyNTMsXG4gICAgICAxOTUsXG4gICAgICAxNDIsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWERRTFdaUDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjQyNjkxNDg6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUZW5uZXQgVGVhbVwiLFxuICAgIFwibGlkXCI6IFwiNjIxNTI4MDczMDk1NTM6NDJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFdPci93RUVKek1yclFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLSXpRNytvZW1lMXZTbE0xTGo1S2lDYnN4eDl1RVlxWGdFcklMV1YwZ1RnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhQcTJyNGdBaklpbkZjNjh2T3Z4Mmd0ODcwTVp0RzhUMDkrbFhXVFEyekZ2aVBlS2RzNHdWeklmZzl5S1FZTzVXNGtMZHRwd2FRSGdRajFKZ2R3NUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVRYU8zRTNyeG85VEF5OHF5TDEwY2ZjdUNqQVUvMFJIS3NkMGJ4UkRpUURMMEhxSzJuT2ZYSzNGQllpak8rbFdNaDRmZWJFSm5xSmdjaGpBRXRvMUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjQyNjkxNDg6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDI4MDYzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
