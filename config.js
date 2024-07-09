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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_56_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI3LFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIklOQnpmT0RiZnltenE3cy9LeWxNd0xFazJDN24yU05FUUlWZ1dXSWU4Qms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVxWU14NUJ6VEl5UGd2WHR0Y2JYRndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzhlYWEyMDUtYmEzNi00MDdlLThkN2ItN2RkY2I4ZWEyNjk3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MCxcbiAgICAgIDEzNixcbiAgICAgIDEyLFxuICAgICAgMjU0LFxuICAgICAgMzAsXG4gICAgICAyMixcbiAgICAgIDE1NCxcbiAgICAgIDEzNyxcbiAgICAgIDI1MSxcbiAgICAgIDY5LFxuICAgICAgMTY1LFxuICAgICAgNDAsXG4gICAgICAxMTcsXG4gICAgICA4OSxcbiAgICAgIDE5NixcbiAgICAgIDI0OCxcbiAgICAgIDE2NixcbiAgICAgIDYxLFxuICAgICAgMTA0LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMjQ0LFxuICAgICAgMTQyLFxuICAgICAgODQsXG4gICAgICAxNDgsXG4gICAgICA0MixcbiAgICAgIDUxLFxuICAgICAgMjIsXG4gICAgICA4MSxcbiAgICAgIDE3NyxcbiAgICAgIDEzNyxcbiAgICAgIDIyMSxcbiAgICAgIDIzNixcbiAgICAgIDEyMSxcbiAgICAgIDk3LFxuICAgICAgMTc1LFxuICAgICAgMTY5LFxuICAgICAgMTgwLFxuICAgICAgMTg3LFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDNTN0NEU0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjQyNjkxNDg6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUZW5uZXQgVGVhbVwiLFxuICAgIFwibGlkXCI6IFwiNjIxNTI4MDczMDk1NTM6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFdPci93RUVMbjJzN1FHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLSXpRNytvZW1lMXZTbE0xTGo1S2lDYnN4eDl1RVlxWGdFcklMV1YwZ1RnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9QZ3J5b2JmTGl0U1c4M3d3K1F2WDFEbnJvQmZoSXBYYURqZ3lrczg3VHU1R0F5YWdOalJVQ1ZSNTY4VThHbXNlRXlLcnVValZ1TDEvY3p1SUxlOUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJtT3M3SVFwZ2szR05uTzYzbUF4SjhRWk16TG1nMW1nNkZIaUJHTGl2MUU1S0tOMVUxN0NLY1MyVTNkUCtkS1RtYk5GN1V4THpqUDN0MTYrdXhIRUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjQyNjkxNDg6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTE1Mzg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlBoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUGguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIbWQvK0VXTGJURWQ0dU5uZ1hJR0paOEFEYkNQTlFnQkVDeWZkZUtYYVYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMzQ1NjA2MjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
