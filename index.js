// Load environment variables from .env file
require('dotenv').config();

// Import the necessary Discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');

// Initialize a new Discord client with specific intents
// GuildMessages: to receive messages in guilds (servers)
// Guilds: to interact with server data
// MessageContent: to access the content of messages
const client = new Client({
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent]
});

// Event listener for when the bot becomes ready to start working
client.once('ready', () => {
    console.log('Ready to talk to strangers'); // Log a message to the console when the bot is ready
});

// Event listener for new messages
client.on('messageCreate', message => {
    if (message.content == 'Hello') { // Check if the message content is 'Hello'
        message.channel.send('Hola'); // Respond with 'Hola' in the same channel
    }
});

// Log in to Discord with your app's token from .env file
client.login(process.env.BOT_TOKEN);
