// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando musica
const execute = (bot,msg,args) => {
    const emojidisc = bot.emojis.cache.get("809479516825059358")
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`© Frogbot 2021 Musica`, "https://folhago.com.br/blogs/significadodossonhos/wp-content/uploads/2021/02/sapo-1280x720.png")
    .setThumbnail('https://pm1.narvii.com/6558/b41665f383e29fdf24b0073265c4412069d7f6a6_hq.jpg')
    .setTitle(`${emojidisc}  ${msg.author.username}, segue ai informações sobre o comando de música!!  ${emojidisc}`)
    .setColor("#0223d6")
    .setDescription(`🔊 Algumas informações do comando de música do Matrix!! 🔊`)
    .addField(`📍 ${process.env.PREFIX}p <nome da música> ou <link da música>`, `Começa a reproduzir a música solicitada!`, true)
    .addField(`📍 ${process.env.PREFIX}skip`, `Pula a reprodução da música atual!`, true)
    .addField(`📍 ${process.env.PREFIX}pause`, `Pausa a música atual!`, true)
    .addField(`📍 ${process.env.PREFIX}resume`, `Volta a reprodução das músicas!`, true)
    .addField(`📍 ${process.env.PREFIX}stop`, `Para a reprodução de todas as músicas!`, true)
    .addField(`📍 ${process.env.PREFIX}fila`, `Exibe as músicas em fila e em reprodução neste servidor`, true)
    .addField(`📍 ${process.env.PREFIX}som`, `Altera meu volume neste servidor.`, true)
    .setImage('https://thumbs.gfycat.com/SpectacularFinishedBasilisk-size_restricted.gif')
    .setFooter(`${msg.author.username} este comando irá ajuda-lo a entender como funcionam os comandos de musica!`, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))

    msg.channel.send(embed);
}

// As informações abaixo compreendem name, help e a parte de execução
// Informações do comando!
module.exports ={
    name: "musica",
    help: "Mostra as informações do comando MÚSICA!",
    execute,
}