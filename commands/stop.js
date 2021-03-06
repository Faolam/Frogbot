const Discord = require('discord.js');

// Início ao comando stop!
const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
        let embedstop1 = new Discord.MessageEmbed()
        .setAuthor(`© Frogbot 2021 Stop`, "https://imagepng.org/wp-content/uploads/2019/04/placa-stop-2.png")
        .setThumbnail("https://theexistentialentrepreneur.com/wp-content/uploads/2017/10/Failing-Forward-1080x600.jpg")
        .setTitle(`⚠️ *${msg.author.username}, não estão sendo reproduzidas músicas!* ⚠️`)
        .setFooter(`Não existem reproduções no momento.`);
        return msg.channel.send(embedstop1);
    }
    queue.songs = [];
    bot.queues.set(msg.guild.id, queue);
    queue.dispatcher.end();
    let embedstop2 = new Discord.MessageEmbed()
        .setAuthor(`© Frogbot 2021 Stop`, "https://imagepng.org/wp-content/uploads/2019/04/placa-stop-2.png")
        .setThumbnail("https://www.bussoladoinvestidor.com.br/wp-content/uploads/2013/08/atr-stop-loss-analise-tecnica.png")
        .setTitle(`⏹ *${msg.author.username}, estou parando definitivamente a reprodução das música* ⏹ `)
        .setFooter(`Sucesso ao skipar a música!`);
    msg.channel.send(embedstop2)
  };
  

// Informações do comando Stop  
  module.exports = {
    name: "stop",
    help: "Para a reprodução de músicas no servidor",
    execute,
  };