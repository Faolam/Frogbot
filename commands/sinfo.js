// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando sinfo
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setThumbnail("https://digilandia.io/wp-content/uploads/2020/04/discord-1.jpg")
    .setAuthor(`© Frogbot 2021 Sinfo`, "https://www.serrajr.eng.br/blog/eng.gif")
    .setTitle(`🏠 Central de Informações deste Servidor! 🏠`)
    .setURL("https://digilandia.io/ferramentas-para-trabalho-remoto/discord/")
    .setColor("#00FFFF")
    .addField(`💨 O nome deste servidor é`, msg.guild.name, true)
    .addField(`💨 O número de membros é`, msg.guild.memberCount, true)
    .addField(`💨 O server foi criado em`, msg.guild.createdAt, true)
    .addField(`💨 O server foi criado no país`, msg.guild.region, true)
    .addField(`💨 ID deste servidor é`, msg.guild.id, true)
    .addField(`💨 O fundador deste servidor é`, msg.guild.owner, true)
    .addField(`💨 Você entrou aqui em`, msg.member.joinedAt, true)
    .setFooter(`🤝 Este campo irá ajuda-lo a se informar sobre esse Servidor!`);

    msg.channel.send(embed);
}


// Informações do comando!
module.exports ={
    name: "sinfo",
    help: "Mostra as informações do servidor ao qual o bot está!",
    execute,
}