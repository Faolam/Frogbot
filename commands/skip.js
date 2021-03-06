const Discord = require('discord.js');

// Início ao comando Skip
const playSong = require("./play").playSong;

const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    let embedskip1 = new Discord.MessageEmbed()
    .setAuthor(`© Frogbot 2021 Skip`, "https://www.shareicon.net/data/512x512/2016/07/28/802995_arrows_512x512.png")
    .setThumbnail("https://www.teclasap.com.br/wp-content/uploads/2011/10/fail.png")
    .setTitle(`⚠️ *${msg.author.username}, não estão sendo reproduzidas músicas!* ⚠️`)
    .setFooter(`Não existem reproduções no momento.`);
    return msg.channel.send(embedskip1);
  }
  queue.songs.shift();
  bot.queues.set(msg.guild.id, queue);
  playSong(bot, msg, queue.songs[0]);
  let embedskip2 = new Discord.MessageEmbed()
        .setAuthor(`© Frogbot 2021 Skip`, "https://www.shareicon.net/data/512x512/2016/07/28/802995_arrows_512x512.png")
        .setThumbnail("https://haulixdaily.com/wp-content/uploads/2019/03/Skip-Rates.png")
        .setTitle(`⏭ *${msg.author.username}, estou pulando a música atual! Que venha a próxima música!!* ⏭`)
        .setFooter(`Sucesso ao skipar a música!`);
  msg.channel.send(embedskip2)
};


// Informações sobre o comando skip!
module.exports = {
  name: "skip",
  help: "Pula para a próxima música",
  execute,
};