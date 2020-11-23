const Discord = require('discord.js');
const { EventEmitter } = require('events');
const { emitKeypressEvents } = require('readline');
const { defaultMaxListeners } = require('stream');
const bot = new Discord.Client()
require('events').EventEmitter.defaultMaxListeners = (2);

var prefix = ('!')
 

bot.on('ready', () => {
  bot.user.setStatus('available')
  bot.user.setPresence({
      game: {
          name: '!help ',
          type: "streaming",
          url: "https://twitch.tv/darablackay"
      }
  });
});

      bot.login('NzM0MjQxMjY5NTYzMjYxMDM4.XxO1eA.cwyqyzc3AMZXuaro4C4ulLt0O5w')

bot.on('message', function (message) {
    if (message.content === '!help') {
        let helpEmbed = new Discord.RichEmbed()
            .setDescription('**Voici Toutes les commandes du BOT ✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯#6462®** :')
            .setColor('#89090E')
            .addField('***Commandes utile*** ' , '***!Serveur\n!list\n!Bot\n!Invite\n!salut\n!Avatar\n!Say\n!clear\n!ping\n!userinfo***')
            .addField('***Commandes de politesse***' , '***bonjour\nbonsoir\nbonne nuit***')
            .addField('**member add et member remove**' , '***activer***')
            .addField('**Commandes de modération 🔒**' , '***!ban \n!kick \n!mute \n!unmute ***')
            .addField('***Nom de la ou les commande(s) inutilisable(s)***' , '***UNMUTE ET MUTE***')
            .setFooter('** Voici mon Préfix : !**')
        message.channel.send(helpEmbed)
        console.log('!help éffectué')
        console.log('aucun bug trouvé ')
    }})

    bot.on('message', function (message) {
   if (message.content === '!bot') {
         let botEmbed = new Discord.RichEmbed()
             .setDescription('**:bar_chart:information bot:**')
             .setColor('#18007a')
             .addField('**:flag_fr:FRENCH BOT :**' , '**QC,CA UTC−05:00**')
             .addField('**:book:Bot library :**' , '**Discord.js**')
             .addField('**:robot:Nom du bot :**' , '**✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯#5056®**')
             .addField('**:paperclip:Date de création :**' , '***2016***')
             .addField('**:spy:Créateur de ✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯ :**' , '**DaraBlackay#1229**' )
             .addField('**:spy:Co-Créateur de ✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯ :**' , '**Raph_McCraft#8646**' )
             .addField('**:inbox_tray:Nombre de commandes**' , '**16**')
             .addField('**:outbox_tray:Nombre de commandes inutilisable**' , '**2**')
             .addField('**Version de Développement**', '**10.5.2.0**')
             .addField('**member add et member remove**', '**activer**')
             .addField("**:clipboard:Nombre de serveurs**:", bot.guilds.size)
      .addField("**:timer:Temps de réaction du bot**", `**0,${bot.ping} ms**`)
       .addField("**:tv:Nombre de salon**", bot.channels.size)
       .addField("**:busts_in_silhouette:Nombre d'utilisateur**", bot.users.size)
             .setFooter('*voici mon préfix : !')
          message.channel.send(botEmbed)
          console.log('!bot éffectué')
          console.log('aucun bug trouvé ')
}})
 





bot.on("message", function(message) {
  if (message.content === '!serveur'){
    let server_name = message.guild.name
  let server_size = message.guild.members.size
  let servEmbed = new Discord.RichEmbed()
  .setDescription('**Voici Les Informations Du Serveur**')
  .setColor('#0a7a00')
  .addField('Nom du Serveur' , server_name)
  .addField("date de création",`${message.guild.createdAt.getDate()}/${message.guild.createdAt.getMonth() + 1}/${message.guild.createdAt.getFullYear()}` )
  .addField('Propriétaire du Serveur' , message.guild.owner)
  .addField('membre sur le serveur' , server_size )
  .addField('région du serveur' , message.guild.region)
  message.channel.send(servEmbed)
  console.log('!serveur effectué')
}})


bot.on("message", function(message) {
  if (message.content === '!invite') {
  let inviteEmbed = new Discord.RichEmbed()
  .setDescription('**Mes liens d`invitation**')
  .setColor('#ff6a00')
  .addField('**avec perm sur-admin**' , '||https://discordapp.com/oauth2/authorize?client_id=734241269563261038&scope=bot&permissions=2146958847|| ')
  .addField('**avec perm Admin**' , '||https://discordapp.com/oauth2/authorize?client_id=734241269563261038&scope=bot&permissions=1610087935|| ')
  .addField('**avec perm de Modo**' , '||https://discordapp.com/oauth2/authorize?client_id=734241269563261038&scope=bot&permissions=339995815|| ')
  .addField('**avec perm sous-modo**' , '||https://discordapp.com/oauth2/authorize?client_id=734241269563261038&scope=bot&permissions=268623015|| ')
  .setFooter('^^✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯#6462®^^')
  message.channel.send(inviteEmbed)
  console.log('!invite éffectué')
}})



bot.on("message", function(message) {
if (message.content === '!ping') {
  let pingEmbed = new Discord.RichEmbed()
  .setDescription('**Ping du @✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯#6462 ®**')
  .setColor('#6402ab')
  .addField('**pings**' , `**${bot.ping} ms enregistrer dans les dernières minutes**`)
  message.channel.send(pingEmbed)
  console.log('!ping éffectué')
}});

  bot.on('prête', () => {
    console.log('je suis prête!');
  });  


 

  bot.on("message", function(message) {
  if (message.content === '@✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯#6462 ') {
    let prefixEmbed = new Discord.RichEmbed()

    var text = message.content.split(' ').slice(1).join(' ');

    if(!text) return message.reply("**Mon Préfix Est: !**");

    message.channel.send(text);

    message.channel.send(prefixEmbed)

    console.log('!prefix éffectué')
 }});

 bot.on('message', function (message) {
  if (message.content === `bonne nuit`) {
    return message.reply('***Bonne nuit a toi !***')
  }
});

bot.on('message', function (message) {
  if (message.content === `!list`) {
    return message.reply('***pour avoir member add and mem0ber remove il faut avoir un channel qui se nom 『📝』list ***')
  }
});



 bot.on('message', function (message) {
  if (message.content === `bonjour`) {
    return message.reply('***Bonne journée !***')
  }
});

bot.on('message', function (message) {
  if (message.content === `bonsoir`) {
    return message.reply('***Bonsoir, BG !***')
  }
});




       bot.on('message', function (message) {
        if (message.content === `fuck`) {
          return message.reply('pas de mauvais mot please!!111!1')
        }
     });
    


        

  bot.on('message', function (message) {
    if (message.content === `!salut`) {
      return message.reply('salut comment ça va ?')
    }
 });



bot.on('message', function (message) {
if (message.content === `!userinfo`) {
  let userEmbed = new Discord.RichEmbed()
  message.channel.send(`***ton speudo:*** ***${message.author.username}***\n***Ton ID***: ***${message.author.id}***`);
  let member = message.mentions.members.first();
  let Auser = message.guild.member(message.author)
  message.channel.send(userEmbed)
}});





bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
if(cmd === '!ban'){
       let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!bUser) return message.channel.send("**vous devez mentioner un utilisateur!**");
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**vous ne disposé pas des permissions néscessaire pour effectuer cette action!**");
      if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("**cet utilisateur ne peut pas etre bannie sur ce serveur!**");
      
      let banEmbed = new Discord.RichEmbed()
      .setDescription("Rapport de ban")
      .setColor("#bc2222")
      .addField("user Sanctionée", `${bUser} with ID ${bUser.id}`)
      .addField("Modérateur", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("salon ", message.channel)
      .addField("quand", message.createdAt)
      .addField("raison", bReason)
      .setFooter('✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯#5056®');
         let rapportchannel = message.guild.channels.find(`name`, "『📝』logs");
      if(!rapportchannel) return message.channel.send("il n'a pas de salon :『📝』logs");
       message.guild.member(bUser).ban(bReason);
      rapportchannel.send(banEmbed);

       return;
    }
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
if(cmd === '!kick'){
     let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("**vous devez mentioner un utilisateur!**");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("**vous ne disposez pas des permissions néscessaire pour effectuer cette action!**");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("**cet utilisateur ne peut pas etre kick sur ce serveur!**");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("**Rapport de kick**")
    .setColor("#bc2222")
    .addField("user Sanctionée",`${kUser} with ID ${kUser.id} `)
    .addField("Modérateur", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("salon ", message.channel)
    .addField("quand", message.createdAt)
    .addField("raison", kReason)
    .setFooter('✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯#5056®');
    let rapportchannel = message.guild.channels.find(`name`, "『📝』logs");
    if(!rapportchannel) return message.channel.send("**il n'a pas de salon :『📝』logs**");
      message.guild.member(kUser).kick(kReason); 
    rapportchannel.send(kickEmbed);
     return;
           
  }

});




bot.on("guildMemberRemove", (member) => {
  const channel = member.guild.channels.find(ch => ch.name === '『📝』list');
  if (!channel) return;
  channel.send(`dit un aurevoir a notre chère, ${member}`);
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '『📝』list');
  if (!channel) return;
  channel.send(`dit bonjour a notre nouveau arrivant, ${member}`);
});





bot.on('message', function(message) {
  if (message.content == "!clear") {
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
          message.channel.fetchMessages(10000)
             .then(function(list){
                  message.channel.bulkDelete(list);
              }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
      }
  }

});



bot.on('message', function (message) {
  if (message.content.startsWith("!avatar"  )) {
      let avatarembed = new Discord.RichEmbed()
      let member = message.mentions.members.first();
      let Auser = message.guild.member(message.author)
      if (!member) {
          avatarembed.setImage(Auser.user.avatarURL)
          return message.channel.send(avatarembed);
      } else {
          avatarembed.setImage(member.user.avatarURL)
          return message.channel.send(avatarembed);
      }
  }
})


//MSG 


 bot.on("message", async message =>  {

                let messageArray = message.content.split(" ");
                      let cmd = messageArray[0];
                      let args = messageArray.slice();
              
                  let tc1arg = args.join(" ").slice();
                  let sicon = message.guild.icon;
                  let bicon = message.author.displayAvatarURL;
                  var TcChannel = message.guild.channels.find('name', '✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯');
                  
                  if(message.channel.name === '✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯'){
                  
              
                  if(message.author.id === '686662723466952723') {
                    var remiembed = new Discord.RichEmbed()
                  
                  .setColor("#FF2222")
                  
                  .setTitle(` Créateur : ${message.author.username} |\ ${message.author.id}`)
                  .addField( "message :" ,` ${tc1arg}`)
                  .setThumbnail(bicon)
                  .setFooter(` message envoyé de ${message.guild.name}`)
                  .setTimestamp()
                  bot.channels.findAll('name', "✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯").map(channel => channel.send(remiembed));
                  } else {
              
              if(message.author.id === '686662723466952723') {
                    var remiembed = new Discord.RichEmbed()
                  
                  .setColor("0xffff80")
                  
                  .setTitle(` Développeur : ${message.author.username} |\ ${message.author.id}`)
                  .addField( "message :" ,` ${tc1arg}`)
                  .setThumbnail(bicon)
                  .setFooter(` message envoyé de ${message.guild.name}`)
                  .setTimestamp()
                  bot.channels.findAll('name', "✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯").map(channel => channel.send(remiembed));

                  message.delete(1000)
                  } else {


                      if(message.author.id === '686662723466952723') {
                    var remiembed = new Discord.RichEmbed()
                    
                  .setColor("0xffff80")
                  
                  .setTitle(` Développeur : ${message.author.username} |\ ${message.author.id}`)
                  .addField("message :" ,` ${tc1arg}`)
                  .setThumbnail(bicon)
                  .setFooter(` message envoyé de ${message.guild.name}`)
                  .setTimestamp()
                  bot.channels.findAll('name', "✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯").map(channel => channel.send(remiembed));

                  message.delete(1000)
                  } else {
              if(message.author.id === '') {
                    var remiembed = new Discord.RichEmbed()
                  
                  .setColor("#1aac20")
                  
                  .setTitle(` Modérateur : ${message.author.username} |\ ${message.author.id}`)
                  .addField( "message :" ,` ${tc1arg}`)
                  .setThumbnail(bicon)
                  .setFooter(` message envoyé de ${message.guild.name}`)
                  .setTimestamp()
                  bot.channels.findAll('name', "✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯").map(channel => channel.send(remiembed));

                  message.delete(1000)
                   } else {
              if(message.author.id === '686662723466952723') {
                    var remiembed = new Discord.RichEmbed()
                  
                  .setColor("#1aac20")
                  
                  .setTitle(` Modérateur : ${message.author.username} |\ ${message.author.id}`)
                  .addField("message :" ,` ${tc1arg}`)
                  .setThumbnail(bicon)
                  .setFooter(` message envoyé de ${message.guild.name}`)
                  .setTimestamp()
                  bot.channels.findAll('name', "✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯").map(channel => channel.send(remiembed));

                  message.delete(1000)
                  
                  
                  } else {
                    if(message.author.id === '686662723466952723') {
                    var remiembed = new Discord.RichEmbed()
                  
                  .setColor("#25cfbd")
                  
                  .setTitle(` Administrateur : ${message.author.username} |\ ${message.author.id}`)
                  .addField( "message" , ` ${tc1arg}`)
                  .setThumbnail(bicon)
                  .setFooter(` message envoyé de ${message.guild.name}`)
                  .setTimestamp()
                  bot.channels.findAll('name', "✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯").map(channel => channel.send(remiembed));

                  message.delete(1000)
                  
                  
                  } else {
                      if(message.author.id === '686662723466952723') {
                    var remiembed = new Discord.RichEmbed()
                  
                  .setColor("#778133")
                  
                  .setTitle(` V.I.P : ${message.author.username} |\ ${message.author.id}`)
                  .addField( "message" , ` ${tc1arg}`)
                  .setThumbnail(bicon)
                  .setFooter(` message envoyé de ${message.guild.name}`)
                  .setTimestamp()
                  bot.channels.findAll('name', "✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯").map(channel => channel.send(remiembed));

                  message.delete(1000)
                  
                  
                  } else {
              
                  var tcembed = new Discord.RichEmbed()
                  
                  .setColor("0xffffff")
                  
                  .setTitle(`Utilisateur : ${message.author.username} | ${message.author.id}`)
                  .addField(`message :` , tc1arg)
                  .setThumbnail(bicon)
                  .setFooter(` message envoyé de ${message.guild.name}`)
                  .setTimestamp()
                  bot.channels.findAll('name', "✵๖̶̶̶ζ͜͡D𝓪rαℑꮻ𝓽✯").map(channel => channel.send(tcembed));
               
                  }
                  message.delete(1000)
   }}}}}}}})

 









   bot.on ('message', message => {  
    if (message.content === '!serverlist') { 
      if(message.author.id.includes('658727062835560450'))
     
      message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))

    }})
      bot.on("message", message => {
        if(message.content.startsWith("!say")) {

          message.delete().catch();
        
          var text = message.content.split(' ').slice(1).join(' ');
        
          if(!text) return message.reply("***Incorrect usage -> Exemple: !say salut***");}
        
           message.channel.send(text);}

)


 
