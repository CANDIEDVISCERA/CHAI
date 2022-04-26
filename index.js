const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log("I'm awake!");
});
client.on('ready', () => {
    client.user.setActivity("*help", {type: "LISTENING"})
})
client.login('Njk3NjMyOTQ3MTM3Njc1Mjc0.Xo6HTw.G9X-QEdjO2Kk7D8ZbgME1KNMuHE');
const { prefix, token } = require('./config.json');
// ...
client.login(token);
client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop.');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`This server's name is: ${message.guild.name}`);
	} else if (message.content === `${prefix}hello`) {
		message.channel.send(`Hello {message.author.name}!`) {
	} else if (message.content === `${prefix}help`) { 
		message.channel.send(`Nice to meet you! My name is CHAI. I am a bot that has resources for mental health. I AM UNDER CONSTRUCTION!`) {
