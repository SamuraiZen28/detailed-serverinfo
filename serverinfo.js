const Discord = require("discord.js");
const colors = require('./../../colors.json')
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "serverinfo",
  category: "Information",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    
    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const role = message.guild.roles.cache.map(role => role.toString()).join(' ') || "No Roles!"
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size; 

    const embed = new MessageEmbed()
      .setTitle(`Server Info For ${guild.name}`)
      .setColor(colors.wip)
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .setThumbnail(message.guild.iconURL())
      .addField(`Name`, guild.name, true)
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Owner`, `${guild.owner.user.tag}`, true)
      .addField(`Roles Count`, Roles, true)
      .addField(`Roles`, `${role}`, true)
      .addField(`Emojis Count`, Emojis, true)
      .addField(`Members Count`, Members, true)
      .addField(`Humans Count`, Humans, true)
      .addField(`Bots Count`, Bots, true)
      .addField(`Total Channels: ${guild.channels.cache.size}`, `Categories : ${message.guild.channels.cache.filter(ch => ch.type === 'category').size} | Text Channels : ${message.guild.channels.cache.filter(ch => ch.type === 'text').size} | Voice Channels: ${guild.channels.cache.filter(ch => ch.type === 'voice').size}`, true)
      .addField(`Server Created At`, guild.createdAt.toDateString())
      .setFooter("Requested by " + message.author.username)
      .setTimestamp();

    

    const embedd = new MessageEmbed()
      .setTitle(`Server Info For ${guild.name}`)
      .setColor(colors.wip)
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .setThumbnail(message.guild.iconURL())
      .addField(`Name`, guild.name, true)
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Owner`, `${guild.owner.user.tag}`, true)
      .addField(`Roles Count`, Roles, true)
      .addField(`Roles`, "There's too many roles for me to display", true)
      .addField(`Emojis Count`, Emojis, true)
      .addField(`Members Count`, Members, true)
      .addField(`Humans Count`, Humans, true)
      .addField(`Bots Count`, Bots, true)
      .addField(`Total Channels: ${guild.channels.cache.size}`, `Categories : ${message.guild.channels.cache.filter(ch => ch.type === 'category').size} | Text Channels : ${message.guild.channels.cache.filter(ch => ch.type === 'text').size} | Voice Channels: ${guild.channels.cache.filter(ch => ch.type === 'voice').size}`, true)
      .addField(`Server Created At`, guild.createdAt.toDateString())
      .setFooter("Requested by " + message.author.username)
      .setTimestamp();

      message.channel.send(embed).catch(err => {
        console.log(err);
        message.channel.send(embedd);
      })


  }
  
};
