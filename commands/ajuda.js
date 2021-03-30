// Início ao comando ajuda onde serão apresentadas as informações do discord
const Discord = require('discord.js');


// Início ao desenvolvimento do comando ajuda!
const execute = (bot,msg,args) => {
        const emojifrog = bot.emojis.cache.get("816366196621312021")
        let embed = new Discord.MessageEmbed()
    
        .setTimestamp()
        .setAuthor(`© Frogbot 2021 Ajuda`, "https://cdn.pixabay.com/photo/2016/07/13/18/20/frog-1515097_960_720.jpg")
        .setTitle(`Salve ${msg.author.username}! Meu nome é Frogbot! ${emojifrog} \nNeste campo te apresento minhas funções!`)
        .setThumbnail("https://www.pipaltree.net/wp-content/uploads/2016/12/dont-be-a-boiling-frog-615x322.jpg")
        .setColor("#e2fd16")
        .setDescription(`⚙️ Lembre-se que meu prefixo é :"${process.env.PREFIX}" ⚙️`)
        .addField(`💣 ${process.env.PREFIX}delete <número de mensagens>`, "Nesse comando faço a remoção das mensagens de um chat. \n| Número mínimo 2 | - | Número máximo 100 |", true)
        .addField(`💣 ${process.env.PREFIX}sinfo`, "Nesse comando apresento informações sobre este servidor!", true)
        .addField(`💣 ${process.env.PREFIX}musica`, "Neste comando são ditas as informações sobre o comando de música!", true)
        .addField(`💣 ${process.env.PREFIX}ping`, "Neste comando são ditas as informações sobre meu ping e latência!", true)
        .addField(`💣 ${process.env.PREFIX}info`, "Aqui mostrarei as informações de um usuário!", true)
        .addField(`💣 ${process.env.PREFIX}config`, "Aqui mostrarei as informações do PC do FROGMAN1!", true)
        .addField(`💣 ${process.env.PREFIX}report "Problema encontrado"`, "Utilize esse comando para avisar nossa equipe sobre os comandos ou funcionalidades que precisam ser ajustados!", true)
        .setFooter(`⛔ ${msg.author.username}, é preciso que o comando solicitado seja semelhante ao exposto aqui!`);

        msg.channel.send(embed);
}


// Aba para o module exports. Informações.
module.exports ={
    name: "ajuda",
    help: "Mostra a ajuda para o usuário!",
    execute,
}