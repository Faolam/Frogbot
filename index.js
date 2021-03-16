// Passando as requisições para que o Bot funcione!
const Discord = require('discord.js'); // Passando que variavel é Discord
const bot = new Discord.Client(); // Passando que o nome que se refere ao Frogbot é "bot"
const dotenv = require("dotenv"); // Biblioteca para facilitar o desenvolvimento
const fs = require("fs"); // Outra biblioteca para facilitar o desenvolvimento
const path = require("path"); // Puxando variáveis do path.
const moment = require('moment');

// Puxar informações do arquivo env.
dotenv.config(); // Trazendo a Central de configurações do dotenv 


// Trazer informações das pasta commands
bot.commands = new Discord.Collection();
const commandFiles = fs
    .readdirSync(path.join(__dirname,"./commands"))
    .filter((filename) => filename.endsWith(".js"));

for (var filename of commandFiles) {
    const command = require(`./commands/${filename}`);
    bot.commands.set(command.name, command);
};


// Aba para as requisições de música
bot.queues = new Map();


// Quando no terminal for digitado "node ." essas mensagens serão exibidas.
bot.once('ready', () => {
    console.log('==================================@@@@@===================================');
    console.log('=============== Estou Pronto Para Ser Usado! Bot : Frogbot ===============');
    console.log('==================================@@@@@===================================');
    let atividade_do_bot = [
        `🦺 Trabalhando em atualizações - v3.1 🦺`,
        `🧱 Atualmente estou em manutenção 🧱`,
        `🐸 Siga o Frogman1 nas redes sociais! 🐸`,
        `🔵 https://twitter.com/Frogmaan 🔵`,
        `🟠 https://www.instagram.com/frogman1_/ 🟠`,
        `🧪 ${process.env.PREFIX}ajuda 🧪`
    ],
    i = 0;
    setInterval(() => bot.user.setActivity(`${atividade_do_bot[i++ % atividade_do_bot.length]}`, {
        type: "STREAMING",
        url : "https://www.twitch.tv/frogman1"
    }), 5500);
        bot.user
            .setStatus("dnd")
            .catch(console.log);
});


// Criando evento mensagem, onde o bot se nn reconhecer o comando responderá de uma outra forma.
bot.on("message", (msg) => {
    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

    if (msg.channel.type === "dm") return msg.author.send(`Sou um Robô direcionado apenas ao servidor do Frogman1. Mensagens na dm como essa aqui ` + "`" + `${msg.content}` + "`" + ` não são conhecidas nem utilizadas como comandos externos!`)
    

    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift().toLowerCase();

    try {
        bot.commands.get(command).execute(bot,msg,args);
    } catch(e) {
        return msg.reply(` comandos como esse ainda não foram adicionados a mim! Você terá o que precisa em " *${process.env.PREFIX}ajuda* "!`);
    }
});


// Colocando o Frogbot para rodar!
bot.login(process.env.TOKEN);