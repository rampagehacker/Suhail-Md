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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_58_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NyxcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICA5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwLFxuICAgICAgICA1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDU0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQyLFxuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6MnlIeHE4OEkzbXdiQ0NBRDd3NS85UUdYZ24vOURtMng4L0YwVE0xaVlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxdDBxUGtxMlR1S202R09RWFNxREl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVmOTg1M2Q0LTg5YTktNGQ5Yy1hYmU3LWFmYWY3ZWMyMGUzMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAxNTEsXG4gICAgICA4OSxcbiAgICAgIDExMixcbiAgICAgIDE0LFxuICAgICAgMTcxLFxuICAgICAgNDMsXG4gICAgICA5MyxcbiAgICAgIDIyOCxcbiAgICAgIDEyOSxcbiAgICAgIDM3LFxuICAgICAgMTkyLFxuICAgICAgMTM1LFxuICAgICAgMTc4LFxuICAgICAgMTkxLFxuICAgICAgNzUsXG4gICAgICAxNjUsXG4gICAgICAxNzcsXG4gICAgICAxOTEsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICA0MyxcbiAgICAgIDE5MSxcbiAgICAgIDE3MyxcbiAgICAgIDE1MSxcbiAgICAgIDg0LFxuICAgICAgMTkwLFxuICAgICAgMyxcbiAgICAgIDc4LFxuICAgICAgMjUwLFxuICAgICAgMTQzLFxuICAgICAgMjIxLFxuICAgICAgMTcxLFxuICAgICAgMTksXG4gICAgICAxNDUsXG4gICAgICA5NyxcbiAgICAgIDIzNyxcbiAgICAgIDUwLFxuICAgICAgNjksXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUhKSFdZRERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjQyNjkxNDg6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUZW5uZXQgVGVhbVwiLFxuICAgIFwibGlkXCI6IFwiNjIxNTI4MDczMDk1NTM6NTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFdPci93RUVMRzk3N1FHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLSXpRNytvZW1lMXZTbE0xTGo1S2lDYnN4eDl1RVlxWGdFcklMV1YwZ1RnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjV4TnN4NlhiYit3eDRDZCt5MjJrTTJrRnJEQlMyZ0NuaktyRzZjbHYxbTZiNWpJR0VsRzBydGcxT0JBdms4R1p5bUVTV3dXUCtUZVJnbGcxUmRjZ0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJEV1pBdUhMM1JmNit3Z3FDcGpaQzlGdEJHeG56d2NWdlJkcDlVWnlveEg5QmcyVGxFcnUwUjlFM0d3WnlSVmtrRUM3ZEdxbU1TVEtBVjZDM1lFVUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjQyNjkxNDg6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDkxMTI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlByXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBMVpGM0I5U2ZuWFdtWEUySStwVWdkUDhrNzZUeDFCbTd3MmxqclVlekFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMzQ1NjA2MjksXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDksMTJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
