const Discord = require('discord.js');

// Início ao desenvolvimento do comando pause!
const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
        let embedpause1 = new Discord.MessageEmbed()
        .setAuthor(`© Frogbot 2021 Pause`, "https://i.pinimg.com/736x/b3/a0/cc/b3a0ccedac3017e9f63842f049840129.jpg")
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Search-failed.svg/1200px-Search-failed.svg.png")
        .setTitle(`⚠️ *${msg.author.username}, não estão sendo reproduzidas músicas!* ⚠️`)
        .setFooter(`Não existem reproduções no momento.`);

      return msg.channel.send(embedpause1);
    }
    queue.dispatcher.pause();
    let embedpause2 = new Discord.MessageEmbed()
    .setAuthor(`© Frogbot 2021 Pause`, "https://i.pinimg.com/736x/b3/a0/cc/b3a0ccedac3017e9f63842f049840129.jpg")
    .setThumbnail("https://cdn4.iconfinder.com/data/icons/seo-internet-marketing-1-3/256/Music_Search-512.png")
    .setTitle(`⏸ ${msg.author.username}, a musica em reprodução foi pausada! ⏸`)
    .setFooter(`Sucesso ao encontrar e pausar a música!`)
    msg.channel.send(embedpause2)
};


// Informações do comando!!
  module.exports = {
    name: "pause",
    help: "Pausa a reprodução das músicas!",
    execute,
};