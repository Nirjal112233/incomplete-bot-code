const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === 'hi bot') {
      msg.reply('hello');
    }
  });



  client.on('message', msg => {
      if (msg.content === 'how are you bot') {
          msg.reply('i am a bot i have no feeling but i am fine')
      }
  });



client.on('message', msg => {
  if (msg.content === 'Thats sad but i am gud too') {
    msg.reply('its ok lol')
  }
})


client.login('token')
