const Discord = require("discord.js");
const client = new Discord.Client({"intents":[
    'GUILDS',
    'GUILD_MEMBERS',
    'GUILD_VOICE_STATES',
    'GUILD_MESSAGES',
    'GUILD_MESSAGE_REACTIONS',
    'GUILD_WEBHOOKS',
    'DIRECT_MESSAGES',
  ]}); 
require("dotenv").config()

client.on("ready",()=>{
    console.log("beep boop beep my systems have started up");
})

client.on("messageDelete",async (message)=>{
    const user = message.author.username +"#"+ message.author.discriminator

    message.channel.send(`${user} heeft net een bericht met de message content: ${message.content}`);
})

client.login(process.env.token);
