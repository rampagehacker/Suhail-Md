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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_48_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU2LFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQyLFxuICAgICAgICA2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM5LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjg3VEI5RzB5WTMwMTRmMmhHOXZEVWJxeFhCY0tUeksvMXR0VjBaMnBIR1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJyc0xMQmNFUnFhSERoMjNTWG8wUndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGEyODUwZWMtOGIwMi00YTg5LWI0MjAtNmFiNWYzYzJkZjJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgNjgsXG4gICAgICAxODMsXG4gICAgICAyNDEsXG4gICAgICAxODQsXG4gICAgICAxMjksXG4gICAgICAxOCxcbiAgICAgIDE0MCxcbiAgICAgIDE3MyxcbiAgICAgIDIzMixcbiAgICAgIDY0LFxuICAgICAgMjA1LFxuICAgICAgNTgsXG4gICAgICAyMTQsXG4gICAgICAxMTUsXG4gICAgICA4NyxcbiAgICAgIDE4MSxcbiAgICAgIDIzNSxcbiAgICAgIDExOCxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDU0LFxuICAgICAgMTA2LFxuICAgICAgMjA1LFxuICAgICAgMjQ3LFxuICAgICAgMTQ0LFxuICAgICAgMTM0LFxuICAgICAgMjA1LFxuICAgICAgMTAxLFxuICAgICAgMzMsXG4gICAgICA2NixcbiAgICAgIDIzNixcbiAgICAgIDgzLFxuICAgICAgMzgsXG4gICAgICAxMzMsXG4gICAgICAxOCxcbiAgICAgIDI1MyxcbiAgICAgIDI0NCxcbiAgICAgIDExNixcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMWUpHNEw5S1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyNDI2OTE0ODo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRlbm5ldCBUZWFtXCIsXG4gICAgXCJsaWRcIjogXCI2MjE1MjgwNzMwOTU1Mzo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQV09yL3dFRUlDODJiUUdHQTRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktJelE3K29lbWUxdlNsTTFMajVLaUNic3h4OXVFWXFYZ0VySUxXVjBnVGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ29DUU1rc3V6WHdHK0gwdmE0S0FwaVlHYmJFMHNDc2Y2ZGxibDVoTWhadDdQc3Y1b2k1MS80a3kyV2NWZlRjN3M1NDJYTEc4VENDMU45WmtZUml5RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWjdkZGsyOTVxVG1qM2gxb3NMU2w2a1lDYm5nUHlMRTR5Z1lCaFdlUnl0WnpZc0NyZXc4TCtiRkxLOXloQ3paS01JYzdwOVczNjFXMGx0NlFpNGNTRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyNDI2OTE0ODo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMzA0OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOUHJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5Qci5qc29uIjogIntcImtleURhdGFcIjpcIkExWkYzQjlTZm5YV21YRTJJK3BVZ2RQOGs3NlR4MUJtN3cybGpyVWV6QUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMzNDU2MDYyOSxcImN1cnJlbnRJbmRleFwiOjEzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsOSwxMl19LFwidGltZXN0YW1wXCI6XCIxNzIxMTMwNDA5MjA0XCJ9Igp9"  // PUT your SESSION_ID 


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
