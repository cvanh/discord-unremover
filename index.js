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
// require("dotenv").config()

client.on('ready', () => {
    console.log(`ingelogd als ${client.user.tag}`);

    client.user.setPresence({
        status: 'online',
        activity: {
            name: "https://github.com/cvanh/discord-unremover",
            type: "PLAYING"
        }
    });
});

client.on("messageDelete",async (message)=>{
    const user = message.author.username +"#"+ message.author.discriminator
    message.channel.send(`${user} \nheeft net een bericht met de message content(s): ${message.content}`);

    // loop trough the attachments and repost them
    message.attachments.map((j)=>{
        message.channel.send(j.attachment)
    })
})

client.login(process.env.TOKEN);
console.log("kaas")