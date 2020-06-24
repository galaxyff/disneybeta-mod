const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "alpaca",
        description: "sends a picture of a alpaca!",
        usage: "",
        category: "Image",
        accessableby: "Members",
        aliases: ["catto"]
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send("Loading <a:loadingag:716132360260812832>")

        fetch("https://apis.duncte123.me/alpaca")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops. I broke, try again!")

            let embed = new RichEmbed()
            .setColor(cyan)
            .setAuthor(`${bot.user.username} Alpaca!`, message.guild.iconURL)
            .setImage(body.data.file)
            .setTimestamp()
            .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

                msg.edit(embed)
        })
    }
}