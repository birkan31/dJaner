const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log (`${bot.user.username} is online!`)
    bot.user.setActivity("Prefix is '-'!", {type: "HIZLANIYOR"});
});

bot.login(process.env.BOT_TOKEN);
