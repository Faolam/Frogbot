// Adquirindo informações do Discord
const Discord = require('discord.js');

// Começando o desenvolvimento do comando de reportes.
const execute = (bot, msg, args) => {
    let argsresult 
    const mChannel = msg.mentions.channels.first();

    const MessageError = new Discord.MessageEmbed()
    .setAuthor(`© Frogbot 2021 Área de Reportes`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setTitle(`Sinto muito ${msg.author.username} mas parece que seu privado do discord está desativado!`)
    .setDescription('Por segurança seu aviso foi guardado e enviado para nossa equipe. Logo mais teremos atualizações, dessa forma sua recomendação será avaliada!')
    .setThumbnail("https://sindju.org.br/wp-content/uploads/2018/05/AVISO.jpg")
    .setColor("#800000")
    .setFooter(`Implementação *AR*. Usuário: ${msg.author.username} - Tag: ${msg.author.tag}`, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))

    let denuncia = new Discord.MessageEmbed()
    .setAuthor(`© Frogbot 2021 Área de Reportes`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setThumbnail("https://sindju.org.br/wp-content/uploads/2018/05/AVISO.jpg")
    .setTitle(`${msg.author.username}, confirme sua denuncia abaixo...`)
    .setDescription(`A mensagem acima, dita por mim, compreende a sua denúncia e para finalizarmos o processo de aviso é preciso que seja clicado no icone 🚧 abaixo! Feito isso, automaticamente será enviada uma mensagem datalhada para nossa equipe sobre o problema relatado.`)
    .setFooter(`Obrigado pela confiança! © Frogbot 2021 Área de Reportes v1.6`)

    msg.delete()

    if (mChannel) {
        argsresult = args.slice(1).join(' ')
        mChannel.author.send("⏳*Mensagem sob argumento de reporte:⏳* \n" + "`" + argsresult + "`\n" + "⌛*Fim da mensagem*⌛").catch(err => msg.channel.send(MessageError))
        mChannel.author.send(denuncia)
      } else {
        argsresult = args.join(' ')
        msg.author.send("⏳*Mensagem sob argumento de reporte:⏳* \n" + "`" + argsresult + "`\n" + "⌛*Fim da mensagem*⌛").catch(err => msg.channel.send(MessageError))
        msg.author.send(denuncia).then(msg1 => {
            msg1.react("🚧")
        });
    }
    console.log()
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ÁREA DE REPORTES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log("=======================================++=======================================")
    console.log(argsresult)
    console.log("=======================================++=======================================")
    console.log()
}

// As informações abaixo compreendem name, help e a parte de execução
// Informações do comando!
module.exports ={
    name: "report",
    help: "Faz com que uma mensagem seja enviada no privado de um usuario fazendo com que ele possa reportar o problema!",
    execute,
}
