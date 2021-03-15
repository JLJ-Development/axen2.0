const Discord = require('discord.js');

module.exports = {
  name: "addwiki",

  async run(client, message, args) {
    const a = new Discord.MessageEmbed()
    a.setDescription("*You can only use this in <#776751493139267605>*")
    a.setColor("RED")

    if (message.channel.id !== "776751493139267605") return message.channel.send(a)

    const e = new Discord.MessageEmbed()
    e.setTitle("Add a code lol")
    e.setColor("RED")
    const eembed = new Discord.MessageEmbed()
    eembed.setTitle("Your Wiki Has Been Sent")
    eembed.setColor("GOLD")

    let text = args.join(" ")
    if (!text) return message.channel.send(e)

    const embed = new Discord.MessageEmbed()
      .setTitle("NEW WIKI")
      .addField("User:", `${message.author}`)
      .addField("Wiki:", `\`\`\`js\n${text}\`\`\``)
      .setColor("GREEN")

    message.channel.send(eembed)

    client.channels.cache.get('820814538676109342').send(embed)
  }
}
