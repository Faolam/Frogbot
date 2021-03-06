const Discord = require('discord.js');

// Início ao desenvolvimento do comando!
const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
        let embedresume1 = new Discord.MessageEmbed()
        .setAuthor(`© Frogbot 2021 Resume`, "https://img2.gratispng.com/20180506/pgw/kisspng-youtube-play-button-computer-icons-clip-art-5aef5d613dea64.7782226315256364492536.jpg")
        .setThumbnail("https://preply.com/wp-content/uploads/2018/04/go_logo_twitter.jpg")
        .setTitle(`⚠️ *${msg.author.username}, não estão sendo reproduzidas músicas!* ⚠️`)
        .setFooter(`Não existem reproduções no momento.`);
      return msg.channel.send(embedresume1);
    }
    queue.dispatcher.resume();
    let embedresume2 = new Discord.MessageEmbed()
        .setAuthor(`© Frogbot 2021 Resume`, "https://img2.gratispng.com/20180506/pgw/kisspng-youtube-play-button-computer-icons-clip-art-5aef5d613dea64.7782226315256364492536.jpg")
        .setThumbnail("https://e7.pngegg.com/pngimages/756/369/png-clipart-goal-setting-motivation-logo-brand-let-s-go.png")
        .setTitle(`▶ *${msg.author.username}, estou voltando a reproduzir as músicas!* ▶`)
        .setFooter(`Sucesso ao voltar a reproduzir as músicas!`);
    msg.channel.send(embedresume2)
  };


// Informações do comando!! 
  module.exports = {
    name: "resume",
    help: "Volta a reprodução da música!!",
    execute,
  };