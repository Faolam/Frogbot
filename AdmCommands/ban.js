const Discord = require('discord.js') // trazendo biblioteca do discord!

// comando de kick!!!!
module.exports = (bot) => {
    bot.on('message', (msg) => {

    // Espaço para o trabalho focado nas Embeds
    const MsgEmbedNoUser = new Discord.MessageEmbed()
    MsgEmbedNoUser.setAuthor(`© Frogbot 2021 Administrator Command`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    MsgEmbedNoUser.setTimestamp()
    MsgEmbedNoUser.setColor("#FF0000")
    MsgEmbedNoUser.setTitle(`Ban Command Error Warning`)
    MsgEmbedNoUser.setThumbnail("https://cdn3.iconfinder.com/data/icons/construction-138/200/Warning-512.png")
    MsgEmbedNoUser.setDescription(`${msg.author.username}, restam espaços a serem inseridos! Descrição do Erro : ` + "`Usuário não mencionado.`")
    MsgEmbedNoUser.setFooter(`Frogbot System Administrator ~ Up Command "Ban"`, "https://cdn2.vectorstock.com/i/1000x1000/18/71/hazard-warning-warn-symbol-icon-flat-sign-symbol-vector-34241871.jpg")

    const MsgEmbedNoMemberUser = new Discord.MessageEmbed()
    MsgEmbedNoMemberUser.setAuthor(`© Frogbot 2021 Administrator Command`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    MsgEmbedNoMemberUser.setTimestamp()
    MsgEmbedNoMemberUser.setColor("#FF0000")
    MsgEmbedNoMemberUser.setTitle(`Ban Command Error Warning`)
    MsgEmbedNoMemberUser.setThumbnail("https://cdn3.iconfinder.com/data/icons/construction-138/200/Warning-512.png")
    MsgEmbedNoMemberUser.setDescription(`${msg.author.username}, informações inseridas não batem! Descrição do Erro : ` + "`Usuário mencionado não pertence a este servidor.`")
    MsgEmbedNoMemberUser.setFooter(`Frogbot System Administrator ~ Up Command "Ban"`, "https://cdn2.vectorstock.com/i/1000x1000/18/71/hazard-warning-warn-symbol-icon-flat-sign-symbol-vector-34241871.jpg")

    const MsgEmbedRemovedMember = new Discord.MessageEmbed()
    MsgEmbedRemovedMember.setAuthor(`© Frogbot 2021 Administrator Command`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    MsgEmbedRemovedMember.setTimestamp()
    MsgEmbedRemovedMember.setColor("#00FF00")
    MsgEmbedRemovedMember.setTitle(`Ban Command Information`)
    MsgEmbedRemovedMember.setThumbnail("http://psicologariusneriacarmo.com.br/wp-content/uploads/2020/02/Antu_task-complete.svg.png")
    MsgEmbedRemovedMember.setDescription(`${msg.author.username}, sucesso obtido ao executar o comando BAN!`)
    MsgEmbedRemovedMember.setFooter(`Frogbot System Administrator ~ Up Command "Ban"`, "https://www.bianchini.com.br/images/sucess.png")

    const MsgEmbedErrorPermission = new Discord.MessageEmbed()
    MsgEmbedErrorPermission.setAuthor(`© Frogbot 2021 Administrator Command`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    MsgEmbedErrorPermission.setTimestamp()
    MsgEmbedErrorPermission.setColor("#FF0000")
    MsgEmbedErrorPermission.setTitle(`Ban Command Error Warning`)
    MsgEmbedErrorPermission.setThumbnail("https://cdn3.iconfinder.com/data/icons/construction-138/200/Warning-512.png")
    MsgEmbedErrorPermission.setDescription(`${msg.author.username}, permissões não disponiveis! Descrição do Erro : ` + "`Possivel erro na tentativa de expulsar alguém com o mesmo cargo que eu. Cargo dado a mim não permite que eu realize essa tarefa.`")
    MsgEmbedErrorPermission.setFooter(`Frogbot System Administrator ~ Up Command "Ban"`, "https://cdn2.vectorstock.com/i/1000x1000/18/71/hazard-warning-warn-symbol-icon-flat-sign-symbol-vector-34241871.jpg")
// Fim do espaço destinado ao fim de criação de Embeds

        if (!msg.guild) return;

        if (msg.author.bot) return;

        if (!msg.guild.member(msg.author).hasPermission('BAN_MEMBERS')) return;

        if (msg.content.startsWith('Frogbot ban')) {
            const Usuario_Expulso = msg.mentions.users.first();

            if (!Usuario_Expulso) {
                return msg.channel.send(MsgEmbedNoUser)
            }

            if (Usuario_Expulso) {
                const membro = msg.guild.member(Usuario_Expulso)
                if (!membro) {
                    msg.channel.send(MsgEmbedNoMemberUser)
                }
                if (membro) {
                    membro
                        .ban(`${Usuario_Expulso} foi *Banido*`)
                        .then(() => {
                            msg.reply(MsgEmbedRemovedMember)
                        })
                        .catch(err => {
                            msg.reply(MsgEmbedErrorPermission);
                            console.error(err)
                        })
                }
            }
                
        }
    })
}