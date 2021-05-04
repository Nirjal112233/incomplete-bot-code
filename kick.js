client.on('ready', () => {
    console.log('I am ready!');
  }); 
  
  client.on('message', message => {
   
    if (!message.guild) return;
  
   
    if (message.content.startsWith('k kick')) { 
      const user = message.mentions.users.first(); 
     
      if (user) {
     
        const member = message.guild.member(user);
      
        if (member) {
       
          member.kick('Optional reason that will display in the audit logs').then(() => {
         
            message.reply(`Successfully kicked ${user.tag}, you should feel bad! They will never be able to rejoin until they click join again!`);
          }).catch(err => {
           
            message.reply('I was unable to kick the member. Check if their roles are higher then mine or if they have administrative permissions!');
            
            console.error(err);
          });
        } else {
         
          message.reply('That user isn\'t in this guild!');
        }
   
      } else {
        message.reply('You didn\'t mention the user to kick!'); 
      }
    }
  });
  
  
  module.exports = {
      name: 'kick',
      description: "This command kicks a member!",
      execute(message, args){
          const target = message.mentions.users.first();
          if(target){
              const memberTarget = message.guild.members.cache.get(target.id);
              memberTarget.kick();
              message.channel.send("User has been kicked");
          }else{
              message.channel.send(`You coudn't kick that member!`);
          }
      }
  }
  
