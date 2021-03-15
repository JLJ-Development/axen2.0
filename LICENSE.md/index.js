const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "<code>Hello, this project is using <a href='https://pinglik.eu' target='_blank'>Pinglik</a>!</code>"
  );
});

app.listen(port, () => {
  console.log(`📡 Pinglik webserver has started!`);
});

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const { join } = require('path')
const { readdirSync } = require('fs')

client.on("ready", () => {
    //When bot is ready
    console.log("I am Ready to Go");
    setInterval(() => {
      const statuses = [
        "Adding bots",
        "a/addbot To Add Bots",
        "Dont Abuse The Commands",
        `${client.guilds.cache.size} Servers`,
        "Currently Under Construction",
        `Bot Serving ${client.users.cache.size} users`,
        `In over ${client.channels.cache.size} channels`
      ];
  
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: "WATCHING" });
    }, 10000);
  });

  client.commands = new Discord.Collection();
  const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
  }
  client.on("error", console.error);
  client.on("message", async message => {
  
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
      if (!client.commands.has(command)) return;
      try {
        client.commands.get(command).run(client, message, args);
      } catch (error) {
        console.error(error);
      }
    }
  })
  
  client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (message.content === `${prefix}beep`) {
      message.channel.send('Boop.');
    }
    else if (command === 'args-info') {
      if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
      }
      else if (args[0] === 'foo') {
        return message.channel.send('bar');
      }
  
      message.channel.send(`First argument: ${args[0]}`);
    }
  
  });
  client.login(process.env.TOKEN);
