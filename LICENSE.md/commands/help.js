const Discord = require('discord.js');

module.exports = {
  name: "help",

  async run(client, message, args) {
    const help = new Discord.MessageEmbed()
    .setTitle("Axen2.0 Help")
    .addField("Members Help", "\`addbot\`, \`ping\`, \`addwiki\`")
    .addField("Staff Commands", "\`declinebot\`")
    .setColor("6b26d4")

    message.channel.send(help)
  }
}
