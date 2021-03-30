// Início ao comando ajuda onde serão apresentadas as informações do discord
const Discord = require('discord.js');


// Início ao desenvolvimento do comando Config PC!
const execute = (bot,msg,args) => {
        const PC = bot.emojis.cache.get("826246354207899698")
        const DEV = bot.emojis.cache.get("820289453586382879")
        const TWITCH = bot.emojis.cache.get("809479396188094495")
        let embed = new Discord.MessageEmbed()
    
        .setTimestamp()
        .setAuthor(`© Frogbot 2021 Config PC`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        .setTitle(`${PC} Config Pc do FROGMAN1 ${PC}`)
        .setThumbnail("https://panels-images.twitch.tv/panel-165040132-image-b9720317-9c53-4c25-938e-e28c847a3396")
        .setColor("#00FA9A")
        .setDescription(`${DEV} Mais informações em : *https://www.twitch.tv/frogman1/about* ${DEV}`)
        .addField(`${TWITCH} GPU`, "RTX 2080 Super HOF", true)
        .addField(`${TWITCH} CPU`, "Intel Core I9-9900k @ 3.6Ghz (5.0Ghz) OC", true)
        .addField(`${TWITCH} Motherboard`, "MSI Z390-A PRO LGA 1151", true)
        .addField(`${TWITCH} RAM`, "HyperX - Predator RGB 16GB DDR4 - 4000Mhz", true)
        .addField(`${TWITCH} Fonte`, "Corsair 750W 80 Plus Gold Semi Modular", true)
        .addField(`${TWITCH} SSD`, "Kingston 120 gb", true)
        .addField(`${TWITCH} HD`, "1 tb", true)
        .addField(`${TWITCH} Gabinete`, "Sharkoon TG5 Blue Vidro Temperado 4mm Led Fan 12cm ATX", true)
        .addField(`${TWITCH} W/C`, "Cooler Master MasterLiquid Lite120", true)
        .addField(`${TWITCH} Monitor`, "AOC Agon 240hz 24", true)
        .addField(`${TWITCH} Monitor 2`, "Samsung 24 Tela Curva 60hz", true)
        .addField(`${TWITCH} Keyboard`, "Razer Huntsman", true)
        .addField(`${TWITCH} Mouse`, "DeathAdder v2 Pro Wireless", true)
        .addField(`${TWITCH} Mousepad `, "HyperX Fury S Speed, Extra Grande (900x420mm)", true)
        .addField(`${TWITCH} Headset`, "Bose QC20", true)
        .addField(`${TWITCH} Microphone`, "Arcano AM-BLACK-1", true)
        .addField(`${TWITCH} Webcam`, "Logitech Brio 4k", true)
        .addField(`${TWITCH} Webcam 2`, "Logitech C920 Pro HD 15MP", true)
        .addField(`${TWITCH} Chair`, "DXRacer F-Series", true)
        .addField(`${TWITCH} Internet`, "400 download // 80 upload", true)
        .setFooter(`⛔ Sugerido por : ${msg.author.usertag}`);

        msg.channel.send(embed);
}


// Aba para o module exports. Informações.
module.exports ={
    name: "config",
    help: "Mostrará as informações do pc do FROGMAN1!",
    execute,
}