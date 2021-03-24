// Puxando informações do Discord.js e da classe Moment
const Discord = require("discord.js");
const moment = require('moment'); 
      moment.locale('pt-BR');


// Início ao desenvolvimento do comando info!
const execute = async (bot, msg, args) =>{

    var member = msg.mentions.members.first();

    if(!member) member = msg.member

    const UserStatus = {
        online: "Online",
        idle: "Ausente/AwayFromKeyboard",
        dnd: "Não pertube!",
        offline: "Não está online para interagir!"
    }

    var presence = member.presence.activities.length ?user.presence.activities.filter(x=>x.type === "PLAYING") : null;

    const Embed_de_Informacoes = new Discord.MessageEmbed()

        .setAuthor(`© Frogbot 2021 Members Info`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        .setTitle(`👀 Informações de ${member.user.username}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        .addField('🔐 ID:', member.user.id)
        .addField('📌 Entrou nesse servidor em:', `${moment(member.joinedAt).format('LLL')}`)
        .addField('📌 Conta criada em:', `${moment(member.user.createdAt).format('LLL')}`)
        .addField('📌 Jogando:', `${presence && presence.length ? presence[0].name : 'None'}`)
        .addField('📌 Status:', `${UserStatus[member.presence.status]}`, true)
        .setColor("RANDOM")
        .setFooter("© Frogbot", member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
   
    msg.channel.send(Embed_de_Informacoes)
   
}


// Considerações finais e adentros sobre o comando UINFO
module.exports = {
    name: "info",
    help: "Mostra as informações de um usuário!",
    execute,
}