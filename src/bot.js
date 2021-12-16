require("dotenv").config();

const {Client, Intents, DiscordAPIError } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });