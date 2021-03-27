const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
let prefix = "!";

const client = new Discord.Client();

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'help'){ 
      const helpEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('HELP MENU')
      .setThumbnail(THUMBNAIL)
      .setDescription('Help Menu For Bot')
      .addFields(
        { name: 'Help Command', value: '!help' },
        { name: 'Prefix Command', value: '!prefix'},
        { name: 'Ping Command', value: '!ping' }
      )
      .setTimestamp()
      .setFooter('DiscordBot Help')
      message.channel.send(helpEmbed)
    } else if(command === 'prefix'){
      message.channel.send(`My Prefix Is ${prefix}! To change it, use **!changeprefix**`)
    } else if(command === 'ping'){
      const userPing = Date.now() - message.createdTimestamp
    message.channel.send(`${userPing}ms.`);
    }
});

client.once('ready', () =>{
  console.log('Our Bot Is Online!')
});

client.login(TOKEN)
