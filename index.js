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
 
  if (message.content === prefix + 'announce') {
           let text = args.join(' ');
           var server = message.guild;
           let annchannel =message.guild.channels.find("announcements");
           let annembed = Discord.RichEmbed()
           annchannel.send({embed: {
            color: 3447003,
            author: {
              name: 'Announcement',
              icon_url: message.author.avatarURL
            },
            title: "Announcement",
            
            description: argument,
            timestamp: new Date(),
            footer: {
              icon_url: message.author.avatarURL,
              text: "Superior's Franchise Bot"
            }
          }
        }); 
   
        return message.reply('Done!');
          
        };

 
   

});  

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
