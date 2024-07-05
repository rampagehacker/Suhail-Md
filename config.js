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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_17_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDczLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTc4LFxuICAgICAgICA0MCxcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU0LFxuICAgICAgICA5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYyLFxuICAgICAgICA4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzksXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5OVkZTNWlHQTRSUWFnYkR6NGM2MGhYTnlscnpRMjIxYVR5cGE4Q0lWbGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjc1QTRRRV9IUTRTaDZlNlRGWDB2SkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzczM2E0MGItOGQxZS00MzQyLWI4OTMtNGYzZThkYzJjOTQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDUzLFxuICAgICAgOTEsXG4gICAgICA1OSxcbiAgICAgIDc3LFxuICAgICAgMTIwLFxuICAgICAgMTk4LFxuICAgICAgMTEsXG4gICAgICA0NixcbiAgICAgIDE4OCxcbiAgICAgIDE1NixcbiAgICAgIDE5NSxcbiAgICAgIDExMixcbiAgICAgIDU5LFxuICAgICAgMjIyLFxuICAgICAgNjMsXG4gICAgICA5NCxcbiAgICAgIDU4LFxuICAgICAgMTcxLFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgNTMsXG4gICAgICAxNjksXG4gICAgICAxOTEsXG4gICAgICAyNSxcbiAgICAgIDMsXG4gICAgICAyNTUsXG4gICAgICA5NyxcbiAgICAgIDU1LFxuICAgICAgMTI0LFxuICAgICAgMTY1LFxuICAgICAgNjUsXG4gICAgICAxNCxcbiAgICAgIDExMixcbiAgICAgIDYxLFxuICAgICAgNSxcbiAgICAgIDE3NCxcbiAgICAgIDMzLFxuICAgICAgMTk4LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUYxSkhaVlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjQyNjkxNDg6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUZW5uZXQgVGVhbVwiLFxuICAgIFwibGlkXCI6IFwiNjIxNTI4MDczMDk1NTM6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFdPci93RUVJclluclFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLSXpRNytvZW1lMXZTbE0xTGo1S2lDYnN4eDl1RVlxWGdFcklMV1YwZ1RnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjk5UWF0UlpvOThwdFVxcTdxVHhaN2xxSjFQeUlYODRJbXhJS1Z5M3o1VzFBY2FRWGx0Y0NiaCtqWDgxSlBBS3B3WkgrOCtOUTZHakFhb285VlQ1VUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5NbEYzMzg3aVpzdW9pejNhSGlKa25ucUlxOGZQS0VVYW1mWHphR0RYTTdqZTZaY2lyMXlPUExieDBYdnoreXZEWjZzKzVHMlBvZnZPM0U1Wk45b2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjQyNjkxNDg6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTY3NDM4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
