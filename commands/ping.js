// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando ping
const execute = async (bot,msg,args) => {
  const emoji1 = bot.emojis.cache.get("816707327830655027")
  let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor('© Frogbot 2021 Ping', 'https://image.freepik.com/vetores-gratis/simbolo-de-rede-sem-fio_1284-42447.jpg')
    .setThumbnail('https://media.giphy.com/media/j5iIjX5RP8GVzT1FqQ/giphy.gif')
    .setTitle(`${emoji1}  ${msg.author.username}! Minhas informações de ping!  ${emoji1}`)
    .setColor("#00FF00")
    .setDescription(`Meu ping no momento é \`${Date.now() - msg.createdTimestamp}ms\` e a latência da minha API é \`${Math.round(bot.ws.ping)}ms.\``)
    .setFooter(`Por ser um robô linkado em um computador físico meu ping pode ser alto!`)

    msg.channel.send(embed);
}

// As informações abaixo compreendem name, help e a parte de execução
// Informações do comando!
module.exports ={
    name: "ping",
    help: "Mostra a latência do bot",
    execute,
}