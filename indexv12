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
	if (message.content === `${prefix}hello`) {
		message.channel.send(`Hello ${message.author.name}!`) {
	} else if (message.content === `${prefix}help`) { 
		message.channel.send(`Nice to meet you! My name is CHAI. I am a bot that has resources for mental health. My prefix is ``*``
		I AM UNDER CONSTRUCTION! Current commands:
		Breathe: Sends a breathing exercise GIF
		Hotlines: Sends a list of hotlines
		First aid: Sends a website with first aid resources
		Resources: Sends a document of resources`) {
	} else if (message.content === `${prefix}hotlines`) {
		message.channel.send(`I hope you're doing okay! Here's a list of hotlines! Suicide Hotline: 1-800-784-8433  
		List of international suicide hotlines: http://www.suicide.org/international-suicide-hotlines.html 
		National Domestic Violence Hotline: 1-800-799-7233 / Text START to 88788`) {
	} else if (message.content === `${prefix}first aid`) { 
		message.channel.send(`Here's basic first aid resources: https://www.verywellhealth.com/basic-first-aid-procedures-1298578#:~:text=What%20are%20the%20ABCs%20of,%2C%20breathing%2C%20and%20continue%20care.`) {
	} else if (message.content === `${prefix}resources`
		   message.channel.send(`Here's a Google Doc of various coping skills and other resources! Safe travels <3! https://docs.google.com/document/d/1vZX53BKS7MkvfhjVSoETUpMvTOpkeGo3eRiLNZOsGYs/edit?usp=sharing`)
	} else if (message.content === `${prefix}breathe`) {
    		const attachment = new MessageAttachment('https://dailyburn.com/life/wp-content/uploads/2016/04/circle-gif-2.gif');
    		   message.channel.send(attachment);
	});
  
