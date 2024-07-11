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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_19_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDYyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4LFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgMTY1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyLFxuICAgICAgICA4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICA3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM5LFxuICAgICAgICAzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYWhwN2haVnc5WXRoZ1UrMC9vbVROaGticG5kWkVrRUwvWHdlc1d3QU1qaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLXlGbGh5V3BUV09JX1Z1M3YtRWdGZ1wiLFxuICBcInBob25lSWRcIjogXCIxMDA1MGNlMC02OWI2LTRiOWYtOWU0Yy03NDgzNzQxODZmYjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMjA3LFxuICAgICAgNTUsXG4gICAgICAxNjMsXG4gICAgICA1NyxcbiAgICAgIDIzNCxcbiAgICAgIDY1LFxuICAgICAgNTMsXG4gICAgICA1MSxcbiAgICAgIDIxNyxcbiAgICAgIDIwNixcbiAgICAgIDUxLFxuICAgICAgMTE1LFxuICAgICAgMTA2LFxuICAgICAgMTE0LFxuICAgICAgMTQ1LFxuICAgICAgMjAxLFxuICAgICAgMTcsXG4gICAgICA1OSxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAxMjYsXG4gICAgICA2MSxcbiAgICAgIDE5NixcbiAgICAgIDI0MCxcbiAgICAgIDgsXG4gICAgICAxNzgsXG4gICAgICAxNzksXG4gICAgICA1OSxcbiAgICAgIDk4LFxuICAgICAgNTgsXG4gICAgICAyMTEsXG4gICAgICAyMixcbiAgICAgIDYwLFxuICAgICAgNDMsXG4gICAgICAyMzksXG4gICAgICAyNDAsXG4gICAgICAyNyxcbiAgICAgIDk3LFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJNMzVIUVNXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI0MjY5MTQ4OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGVubmV0IFRlYW1cIixcbiAgICBcImxpZFwiOiBcIjYyMTUyODA3MzA5NTUzOjQ0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BXT3Ivd0VFT2VZd2JRR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS0l6UTcrb2VtZTF2U2xNMUxqNUtpQ2JzeHg5dUVZcVhnRXJJTFdWMGdUZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoRjJUZkZ0Nko4cWFtVDlHcGhyNFpaUUNlMHZsQ0tTZERoNFNYMjNPcFNkR1hmVXZMME5qcWVsZHNhZkxJVkJVSVU1U1lGTFJTRE12T1poNkpzYTlEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiUzRwYlh0b3J1UUllZWVkaEF0MEUvMFJKcGtjQWF3SjduRzAwNVlvcmErenEyc3p0TDZpNXhSTzdqRjA0YXdDQ09vUmF5YnFhTk9Kay9nSCtpMWZBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI0MjY5MTQ4OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDczMjc3OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
