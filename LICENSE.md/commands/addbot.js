const Discord = require('discord.js');

module.exports = {
    name: "addbot",

    async run(client, message, args) {

      const eeeembed = new Discord.MessageEmbed()
      eeeembed.setTitle("Your Bot Has Been Submitted")
      eeeembed.setColor("GOLD")

          const eeembed = new Discord.MessageEmbed()
        eeembed.setDescription("You can only execute this command in <#783123863575330816>")
        eeembed.setColor("RED")

        if (message.channel.id !== "783123863575330816" && "776693411990077440" && "776693471951192094") return message.channel.send(eeembed)

        const eembed = new Discord.MessageEmbed()
        eembed.setTitle("Add The Prefix And bot id Example: || a/addbot <Bot ID> <prefix>")
        eembed.setColor("RED")

        if (!args[0]) return message.channel.send(eembed)

        if (!args[1]) return message.channel.send(eembed)

        let text = args.join(" ")
        if (!text) return message.channel.send(eembed)

        const embed = new Discord.MessageEmbed()
            .setTitle("New Bot")
            .addField("User:", `${message.author}`)
            .addField("Bot Link", `[Link](https://discord.com/api/oauth2/authorize?client_id=${args[0]}&permissions=0&scope=bot)`)
            .addField("Prefix", `\`${args[1]}\``)
            .addField("Name", `<@${args[0]}>`)
            .setColor("GREEN")

            message.channel.send(eeeembed)

        client.channels.cache.get('784657197392723968').send(embed)
    }
}