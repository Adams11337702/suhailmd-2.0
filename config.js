const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0558151267";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_55_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDc0LFxuICAgICAgICA4OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOU82RGV6SGc5RXI1RnhrM21XVXEwa0JoMTdKQTcxYWo5Rnd3M2ZHVkZEUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMktkZnR5ZmdTUkdzME03RXp5aVpSUVwiLFxuICBcInBob25lSWRcIjogXCIyZjUyNjcwNy1kZmUxLTRkMWItOTQyNS02MmQwMmRiZDFkZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgNjUsXG4gICAgICAxODAsXG4gICAgICAxNTMsXG4gICAgICAyMjIsXG4gICAgICA5OSxcbiAgICAgIDUsXG4gICAgICAyMTAsXG4gICAgICAyNTMsXG4gICAgICAxMTksXG4gICAgICAxMDAsXG4gICAgICAxLFxuICAgICAgMTE4LFxuICAgICAgMTU5LFxuICAgICAgMjQ0LFxuICAgICAgMTc2LFxuICAgICAgNjIsXG4gICAgICAyMzYsXG4gICAgICAyMDAsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMTg0LFxuICAgICAgOTIsXG4gICAgICAxNjcsXG4gICAgICAyMyxcbiAgICAgIDExNixcbiAgICAgIDYzLFxuICAgICAgMTUsXG4gICAgICAxNTMsXG4gICAgICA1NSxcbiAgICAgIDE5NixcbiAgICAgIDU0LFxuICAgICAgNDMsXG4gICAgICAxMjQsXG4gICAgICAxMTksXG4gICAgICA0NixcbiAgICAgIDgyLFxuICAgICAgMzgsXG4gICAgICAyNDksXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIRlpYR1Y5WFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjA3ODY5NjkzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDb2FjaCBBZGFtc1wiLFxuICAgIFwibGlkXCI6IFwiMTQyOTYyODUxODg5MjU3OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTStRNEpVRUVPT014N2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvaFNQUXBlZ0tsNXJLNUVwZkJWRVNlTm9Ca3U3U2M2U2dYS2RNUDk0elNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlV4dW9zVjBja2RXelJaVk9zTFNrcGRoT2pIT2dpV1V4RGVGcFR6WXJwU0EwMDZaZm1PZ0pBTlpzOEFYdlhxS0E0aS9leE1vRnA3bndyTHJmYys0S0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRwSnJZQ1RINFhHcUJ5N1JNbHpWOHN2T2dNMWI0QmJEM29iSUZMMkRTQUdEN0NuS1M4WmJ2cUQ5ZUovby9vcFprL3l6MVFQMnBhcE44N3Z1bGpGOERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzIwNzg2OTY5MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMzE1MzAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
