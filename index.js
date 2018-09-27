const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    const command = message.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = message.content.split(' ').slice(1).join(' ');
    let prefix = process.env.PREFIX
    if (message.content === prefix + 'help') {

       message.channel.send('New');
       return;

       };
 
   if (message.content === prefix + 'new') {
           let text = args.join(' ');
           let server = message.guild;
           server.createChannel("Ticket"+message.author.id, "text");
           let channel =message.guild.channels.find("Ticket"+message.author.id, text);
           channel.send("Subject: "+text);
    return;
        };
 
   

});  

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
