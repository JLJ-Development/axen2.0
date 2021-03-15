const Discord = require('discord.js');

module.exports = {
  name: "declinebot",

  async run(client, message, args) {

    const eembed = new Discord.MessageEmbed()
    eembed.setTitle("Mention a bot lol")
    eembed.setColor("RED")

      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!args[0]) return message.channel.send(eembed);
    
    let text = args.join(" ")
    
let reason = args.slice(2).join(" ")
      if (reason === undefined) reason = 'no reason given';
      member.kick(reason)
            .catch(err => {
                if (err) return message.channel.send('bruh there was a fat error')
            })

  

    const eeembed = new Discord.MessageEmbed()
    eeembed.setTitle("Provide The User ID")
    eeembed.setColor("RED")


    const embed = new Discord.MessageEmbed()
    .setTitle("BOT DECLINED")
    .addField("Reason", `${reason}`)
    .addField("Bot Reviewer", `${message.author}`)
    .addField("Bot Declined:", `${member}`)
    .setColor("RED")


    if(!text) return message.channel.send(eembed)
    if (!args[1]) return message.channel.send(eeembed)
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Your Not A Bot Approver Dude');
    if(!args[0]) return message.channel.send(eembed)
    if (!member) return message.channel.send(eembed)
    if (!reason) return message.channel.send(eembed)
    if (!member.kick) return message.channel.send(eembed)
       client.channels.cache.get('776692229376311296').send(embed)
client.channels.cache.get('776692229376311296').send(`<@${args[1]}>`)
  }
}
