const Discord = require('discord.js');

module.exports = (bot) => {
    bot.on('guildMemberAdd', (member) => {
        const ChannelBoasVindas = member.guild.channels.cache.find(Channel_Id => Channel_Id.id === '830246833594302484')
        const GuildBoasVindas = bot.guilds.cache.get('531856510389714954')

        const EmbedGood = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/icons/${GuildBoasVindas.id}/${GuildBoasVindas.icon}.png')
        .setColor('RANDOM')
        .setAuthor('🖐 Bem-vindo(a) ao Testing my Robots!')
        .setTitle(`Este é um servidor destinado a manutenção de Robôs personalizados!`)
        .setDescription(`${member}, não seja desagradavel com ninguém. Aproveite todas as funcionalidades que este servidor tem a oferecer!`)
        .setFooter('2020 © Frogbot ~ Welcome!')

        .setTimestamp()
        ChannelBoasVindas.send(EmbedGood)
    })
}