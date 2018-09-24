const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
let prefix = process.env.PREFIX
    if (message.content === prefix + 'help') {

       message.channel.send('There is currently no commands available.');

       }

});  

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
