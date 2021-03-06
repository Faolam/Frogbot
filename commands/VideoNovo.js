// Trazendo informações sobre o discord para o desenvolvimento do comando de novos vídeos...
const Discord = require('discord.js');
const ytdl = require('ytdl-core')

// Dando início ao desenvolvimento do comando de video
const execute = (bot,msg,args) => {
    let Video_Novo = args.join(" ").split(" / ");

    msg.delete()

    // Message Error Log
    const MessageEmbedError = new Discord.MessageEmbed()
    .setAuthor(`© Frogbot 2021 Sistema de Novos Vídeos`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setTitle(`Sinto muito ${msg.author.username} mas parece que seu privado do discord está desativado!`)
    .setDescription('Foram verificados erros no conjunto do comando. Por esse motivo estamos querendo acessar seu privado do discord, para justamente mostra-lo os passos corretos. Por favor libere seu privado do Discord. Caso contrário contate o ADMINISTRADOR do servidor.')
    .setThumbnail("https://s3.amazonaws.com/scribblelive-com-prod/wp-content/uploads/sites/4/2020/08/stage-en-error-1020.png")
    .setColor("RANDOM")
    .setFooter(`Error Level. Usuário: ${msg.author.username} - Tag: ${msg.author.tag}`, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    // Fim da Message Error Log

    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
        // Comando de aviso
        const MessageEmbedAviso = new Discord.MessageEmbed()
        .setTimestamp()
        .setAuthor(`© Frogbot 2021 Sistema de Novos Vídeos`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        .setTitle(`Erro ao iniciar a \`Classe\``)
        .setDescription(`\`${msg.author.username}\` infelizmente você não possui o cargo necessário para esse comando. Por favor verifique sua conta ou contate o ADMINISTRADOR desse servidor.`)
        .setThumbnail("http://www.cruzeiro.rs.gov.br/wp-content/uploads/2019/01/aviso-520x245-e1548354115791.png")
        .setColor("RANDOM")
        .setFooter(`Cargos necessários indisponíveis para \`${msg.author.username}\``, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        // Fim ao comando aviso

        return msg.channel.send(MessageEmbedAviso);
    }
    if (args.length === 0) {
        // Comando de ajuda ao usuário que solicitar o envio do Vídeo Novo No Canal
        const MessageEmbedAjuda = new Discord.MessageEmbed()
        .setTimestamp()
        .setAuthor(`© Frogbot 2021 Sistema de Novos Vídeos`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        .setTitle(`Aviso ao Usuário MANEGE : \`${msg.author.username}\``)
        .setDescription(`\`${msg.author.username}\` parece que você esqueceu de adicionar os campos de link e título do vídeo! Tente novamente dessa forma: \n\`${process.env.PREFIX}live "Título do Vídeo" / "Link do Vídeo"\``)
        .setThumbnail("https://www.teclasap.com.br/wp-content/uploads/2010/02/help.png")
        .setColor("RANDOM")
        .setFooter(`Aviso ao Usuário MANAGE Tag : \`${msg.author.tag}\``, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))

        // Fim comando de ajuda ao usuário que solicitar o envio do Vídeo Novo No Canal
        return msg.author.send(MessageEmbedAjuda).catch(err => msg.channel.send(MessageEmbedError));
    }
    let Titulo = Video_Novo[0];
    let link = Video_Novo[1];
    if(!link){
        // Inicio a mensagem de ajuda 1
        const MessageEmbedAjuda1 = new Discord.MessageEmbed()
        .setTimestamp()
        .setAuthor(`© Frogbot 2021 Sistema de Novos Vídeos`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        .setTitle(`Aviso ao Usuário MANEGE : \`${msg.author.username}\``)
        .setDescription(`\`${msg.author.username}\` parece que você esqueceu de adicionar o campo de link do vídeo! Tente novamente dessa forma: \n\`${process.env.PREFIX}live "Título do Vídeo" / "Link do Vídeo"\``)
        .setThumbnail("https://www.teclasap.com.br/wp-content/uploads/2010/02/help.png")
        .setColor("RANDOM")
        .setFooter(`Aviso ao Usuário MANAGE Tag : \`${msg.author.tag}\``, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        // Fim da mensagem de ajuda 1
        return msg.author.send(MessageEmbedAjuda1).catch(err => msg.channel.send(MessageEmbedError))
    }
    const CanalDosVideos = msg.guild.channels.cache.find(cda => cda.id === "816363150160298034")
    const tumb = ytdl.getURLVideoID(link)

    // Inicio ao CanalDosVideos
    const MessageVideoNovo = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor(`© Frogbot 2021 Sistema de Novos Vídeos`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setThumbnail(`https://img.youtube.com/vi/${tumb}/maxresdefault.jpg`)
    .setTitle(Titulo)
    .setURL(link)
    .setColor("RANDOM")
    .setDescription(`---> ${link}`)
    .setFooter('Chegou mais um vídeo novo no Canal! Clica no link ou no título desse Embed para vê-lo!')
    // Fim ao CanalDosVideo

    CanalDosVideos.send(MessageVideoNovo);
}


// Informações do comando!
module.exports ={
    name: "video",
    help: "Divulgação de Novos vídeos no youtube",
    execute,
}
