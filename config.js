const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349049541318";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347019314271";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_30_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV3pCOWxqVE5nOEl3eGdhaFFkVGhEbzBZS0JlSHRQeGNFOWllVDdYMXJzWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidmhqWkxYRGNTTXFfYVp5WEtlbzN3QVwiLFxuICBcInBob25lSWRcIjogXCIyMzJhNjRiMS04N2IwLTRlOGYtYjVlYi04MmE0NzdjMjlmNzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgMTg5LFxuICAgICAgNzUsXG4gICAgICAyNSxcbiAgICAgIDQwLFxuICAgICAgOTgsXG4gICAgICAxODIsXG4gICAgICAyMzcsXG4gICAgICAxMTQsXG4gICAgICAyNDUsXG4gICAgICA3MixcbiAgICAgIDIwNSxcbiAgICAgIDEzNCxcbiAgICAgIDI0NSxcbiAgICAgIDI0MyxcbiAgICAgIDI1LFxuICAgICAgMjEyLFxuICAgICAgMTQ0LFxuICAgICAgMjMwLFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgNzQsXG4gICAgICAyMTMsXG4gICAgICA4MCxcbiAgICAgIDk1LFxuICAgICAgMTkxLFxuICAgICAgMjQwLFxuICAgICAgMjQ0LFxuICAgICAgMjQsXG4gICAgICA5NyxcbiAgICAgIDU5LFxuICAgICAgMTIwLFxuICAgICAgNjYsXG4gICAgICAyMzUsXG4gICAgICA5OCxcbiAgICAgIDI0NixcbiAgICAgIDMxLFxuICAgICAgMTU1LFxuICAgICAgNDksXG4gICAgICA2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMN0VGSERRTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxOTMxNDI3MTo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg3MDAzMzYyNjE1NDA1OjUwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05MSThhZ0JFT3FzdExjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUmttb2pRRmZ5OWh1OVF4MDZFZm56S0JzMWJNMDlHVjNHdnY1aVUzNjlqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2bkxhMlJUN0pkYUp0Z0Q3VUZhRWU1cWhlbktYVzlyTGQ1b1NDMTNsSjV4ZnBMVHVPV1krSXZNbFdXTERENS85cW5iQ1htTSt4WGNlRTFjWW1zZVZCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDcUJiMWxYQTNwNEloM1hDRFpZVEFQbGVyNVhQUkduTHVYN05sODQwb1U5bDFZSktwNjd6SDVqMldBa09oNkFDamw4ekRzK0toNlNoQ0dHMWsyb2REdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE5MzE0MjcxOjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjgxMzgwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx1elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHV6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiditjYThyM1hjck45elQwU0tqL3BkeFJpKzNKamZWZXBiUGVZUFVnb05MYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNTQxODIyMjUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "akay",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
