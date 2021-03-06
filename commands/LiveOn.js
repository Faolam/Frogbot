// Início ao comando ajuda onde serão apresentadas as informações do discord
const Discord = require('discord.js');


// Início ao desenvolvimento do comando ajuda!
const execute = (bot,msg,args) => {
        const emojifrog = bot.emojis.cache.get("809479396188094495")
        msg.delete()

        let embed = new Discord.MessageEmbed()
    
        .setTimestamp()
        .setAuthor(`© Frogbot 2021 Live On`, "https://image.freepik.com/vetores-gratis/frogman-mascot-esport-logo_173421-9.jpg")
        .setThumbnail("https://pbs.twimg.com/profile_images/1354127179962085381/J-Nlrn_F.jpg")
        .setTitle(`${emojifrog} Salve pessoal! Live On, chega mais! ${emojifrog}`)
        .setDescription(` --->   https://www.twitch.tv/frogman1`)
        .setColor("#00FA9A")
        .setImage("https://static-cdn.jtvnw.net/jtv_user_pictures/f772f98f-1594-4336-b82a-efee5b75b201-profile_banner-480.png")
        .setFooter(`🏅 Cola mais!! A live começou!!`);

    
        msg.channel.send(embed);
}


// Aba para o module exports. Informações.
module.exports ={
    name: "on",
    help: "Mostra a ajuda para o usuário!",
    execute,
}