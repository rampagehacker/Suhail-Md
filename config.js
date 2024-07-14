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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_11_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDksXG4gICAgICAgIDU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA5LFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU2LFxuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI3LFxuICAgICAgICA0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgwLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDczLFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNjNyS1ZGbGtpZkJEWlJBRSsxbDJYdEsyTDhLL05OMlkyY3NzQVJHam1SYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3pyOHROVTJRbWFSYjd4amJfRlRxZ1wiLFxuICBcInBob25lSWRcIjogXCIxM2YxZWZkOS05ZTU1LTQ1MWMtODQ4OC04NjIwYWY2ZDJkMTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAzMCxcbiAgICAgIDI0OSxcbiAgICAgIDMxLFxuICAgICAgMTY4LFxuICAgICAgMzEsXG4gICAgICA0LFxuICAgICAgMjMwLFxuICAgICAgNTQsXG4gICAgICAzNCxcbiAgICAgIDQsXG4gICAgICAxNTcsXG4gICAgICAxNTQsXG4gICAgICAyMTIsXG4gICAgICA0NyxcbiAgICAgIDIwMyxcbiAgICAgIDM1LFxuICAgICAgNTQsXG4gICAgICAxMjksXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTM0LFxuICAgICAgMTg4LFxuICAgICAgNzMsXG4gICAgICAxMDAsXG4gICAgICAxNCxcbiAgICAgIDExOSxcbiAgICAgIDE1MyxcbiAgICAgIDE5LFxuICAgICAgMTk2LFxuICAgICAgMTYsXG4gICAgICAzNSxcbiAgICAgIDI1NCxcbiAgICAgIDIwMSxcbiAgICAgIDE0MixcbiAgICAgIDE0NixcbiAgICAgIDUwLFxuICAgICAgMjM4LFxuICAgICAgMTYyLFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjYzS0RCWlgzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI0MjY5MTQ4OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGVubmV0IFRlYW1cIixcbiAgICBcImxpZFwiOiBcIjYyMTUyODA3MzA5NTUzOjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BXT3Ivd0VFSlhZemJRR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS0l6UTcrb2VtZTF2U2xNMUxqNUtpQ2JzeHg5dUVZcVhnRXJJTFdWMGdUZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaUnpyRFU0RGdPSjlKV2I1RjVHQ1ZacXhkOUpmZ2lwS3JydDJBUGRmS1VNL0s2akhDVTdDTTF3TE40MmZna25NYkFzd2dMa2lSbGxzWFlKYmxvUHpCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJMkx6YThrRDVhOG15S3ZYUXdYc0F2V2JnTGw0MjNMdEdXdVVBU01nNUd6V1VRdHUrWDZOZ29lc29pMmpiTmlXWnRBN2dVK2N0bEh4QzZMSDVTVldBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI0MjY5MTQ4OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkzNzQ5N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
