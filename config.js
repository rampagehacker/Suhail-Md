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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_38_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICA3NyxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcxLFxuICAgICAgICA4NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTYyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk5LFxuICAgICAgICA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3NTlyK0JtM21XbmxNM0JldDFGSWltNkxtRGJGU1dLdysxVHhyaUV5Qm9jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIweGl3aUQ1TVIybU9qTkdaVTZJby1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI5ZDQ5ZDhlLWIyODctNGNmOC1iMGUwLTBkZTNjYTUxYThiZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDY4LFxuICAgICAgMTIsXG4gICAgICAxNTUsXG4gICAgICAxNzIsXG4gICAgICAxNDIsXG4gICAgICA3LFxuICAgICAgMjA1LFxuICAgICAgOTgsXG4gICAgICAyNDQsXG4gICAgICAyMzYsXG4gICAgICAyNDUsXG4gICAgICA2NyxcbiAgICAgIDE1MSxcbiAgICAgIDIwNSxcbiAgICAgIDcsXG4gICAgICAyNDQsXG4gICAgICAxNTQsXG4gICAgICAyMDksXG4gICAgICA2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAxMjYsXG4gICAgICAxNzgsXG4gICAgICA4NyxcbiAgICAgIDQ2LFxuICAgICAgMTMsXG4gICAgICAyMjgsXG4gICAgICAyNDgsXG4gICAgICAyMDgsXG4gICAgICAxNzYsXG4gICAgICA4NixcbiAgICAgIDgxLFxuICAgICAgMzEsXG4gICAgICAwLFxuICAgICAgMTYyLFxuICAgICAgMjAyLFxuICAgICAgMjA3LFxuICAgICAgMjI1LFxuICAgICAgMzcsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0dCMzM4QllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjE0ODI4NDM6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNSRUVEIFNIT1BcIixcbiAgICBcImxpZFwiOiBcIjI3MjQ1NTk0ODA5OTU4NTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09TTnhlVURFSUxFcWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSkp5UlpSMm05eDZ1bjBFaUt0TEpBcDBrZitpZm05MVNYUmNET3AvcGhVND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwc0Y4YTlvb2p0SnJjUmFCaGtZb2VmM2JiVmF0MFVUVzRoZEpNVW9qdzI1M1lBTTdHTno4K2ZsNllvR29Qc0hZMUZHTllzaGN2L0tMdkc4YnRlSkhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYRTdMSTZFdEkweUpkVTVibmt5Y3JVamExdllKV0Ezb0dzVHRmOCs4RjNHUktLaktVcDFCcElmdWF2Z3VBTTNXTDg0NnpuS2YrVHNRRXJjb3Fyd25qZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDIxNDgyODQzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM0NTA5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxkSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGRKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN05vaU1hK3FPNHRnTUFIWGVPUjA0a0xsQ3E4QnR6aDBiUU5yM2VOUVJhRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDE4MjUwOTgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzNDUwOTk5NjdcIn0iCn0="  // PUT your SESSION_ID 


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
