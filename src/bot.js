require("dotenv").config();

const {Client, Intents, DiscordAPIError, } = require('discord.js');
const Discord = require('discord.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = process.env.PREFIX

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Music Bot is online!');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'ping'){
        console.log('worked');
        client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if ( command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if ( command === 'leave') {
        client.commands.get('leave').execute(message, args);
    }
});

client.login(process.env.CLIENT_TOKEN)
