var Eris = require('eris');
var moment = require('moment')
moment.locale('pt-br')
var musicAPI = require('music-api')
var google = require('google')
var bot = new Eris("MzAwMjY4MTIzNTk5NDA1MDU3.C9LKkg.fKW2as1e5eCnKrD5wGWR5enEylo");
var numero = 0;
var prefix = ('zon!')
var aliase = ('z!')
bot.on("ready", () =>{
    console.log("tá vivo essa porra");
    bot.guilds.forEach(guild => console.log(guild.name));
        bot.guilds.forEach(guild => bot.createMessage(guild.defaultChannel.id, ""));
          bot.editStatus("dnd", {name: "Sendo um céu em " + bot.guilds.size + " servidores || (Bot em manutenção)  ", type: 1, url: "https://www.twitch.tv/felps "});
        });
bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf(prefix + "help") == 0){
   bot.createMessage(msg.channel.id, {embed: {footer:{text: 'Obrigado por usar o Skyzon seu fofo', icon_url: 'https://cdn.discordapp.com/avatars/253564007171096586/bc4879686aee60c7b5e66bae90d633a7.jpg'},
     title:'AVISO: se quiser mais informações sobre o comando use zon!h (comando)',
     author:{name:'Comandos do Skyzon:', icon_url: 'https://cdn.discordapp.com/avatars/300268123599405057/9ff974bd35da4e8b9576fa95604b03ac.jpg'},
     color: Math.floor(Math.random() * 47148),
     fields:[
         {
             name: 'Utility:',
             value: 'zon!serverinfo - Info do server \nzon!botinfo \nzon!avatar - pega o avatar de alguem \nzon!say faça o bot dizer algo'
         },
         {
             name: 'Creator Only:',
             value: 'zon#eval \nzon#turnoff'
         },
         {
             name: 'Fun',
             value: 'zon!kill - mate alguem'
         },
         {
             name: 'Misc',
             value: 'zon!invite - convite do bot \nzon!help - esse aki ue'
         }
     ]
 }});
}
});
bot.on("messageCreate", (msg) => {
if(msg.content.indexOf("zon!invite") == 0){
        bot.getDMChannel(msg.author.id).then(dm => {bot.createMessage(dm.id, " Coloque o bot em seu server: <https://discordapp.com/oauth2/authorize?client_id=300268123599405057&scope=bot&permissions=3156999> \nEntre no server oficial do Skyzon Bot: https://discord.gg/63XT4SW \nQuer aprender a programar ou pedir ajuda a alguns programadores entre nesse server: https://discord.gg/4WzrNN6 \nOutro sever de programadores: https://discord.gg/8yN34au \nBot de um amigo meu: https://discordapp.com/oauth2/authorize?client_id=294881981630644224&scope=bot")});;
  console.log("o "+msg.author.username+"Usou o comando zom!invite");
}

 if(msg.content.indexOf("zon!invite") == 0){
        bot.createMessage(msg.channel.id, ":mailbox:| **Mandado no Privado para nenhum problema** ");
      }

 if(msg.content.indexOf(aliase + 'i') == 0){
   bot.getDMChannel(msg.author.id).then(dm => {bot.createMessage(dm.id, " Coloque o bot em seu server: <https://discordapp.com/oauth2/authorize?client_id=300268123599405057&scope=bot&permissions=3156999> \nEntre no server oficial do Skyzon Bot: https://discord.gg/63XT4SW \nQuer aprender a programar ou pedir ajuda a alguns programadores entre nesse server: https://discord.gg/4WzrNN6 \nOutro sever de programadores: https://discord.gg/8yN34au \nBot de um amigo meu: https://discordapp.com/oauth2/authorize?client_id=294881981630644224&scope=bot")});;
 }

if(msg.content.indexOf(aliase + 'i') == 0){
  bot.createMessage(msg.channel.id, ':mailbox: | **Mandado no Privado para nenhum problema**')
}

else if(msg.content === aliase + 'inv') {
  bot.getDMChannel(msg.author.id).then(dm => {bot.createMessage(dm.id, " Coloque o bot em seu server: <https://discordapp.com/oauth2/authorize?client_id=300268123599405057&scope=bot&permissions=3156999> \nEntre no server oficial do Skyzon Bot: https://discord.gg/63XT4SW \nQuer aprender a programar ou pedir ajuda a alguns programadores entre nesse server: https://discord.gg/4WzrNN6 \nOutro sever de programadores: https://discord.gg/8yN34au \nBot de um amigo meu: <https://discordapp.com/oauth2/authorize?client_id=294881981630644224&scope=bot>")});;
}

else if(msg.content === aliase + 'inv') {
  bot.createMessage(msg.channel.id, ':mailbox: | **Mandado no Privado para nenhum problema**')
}
});
bot.on("messageCreate", (msg) => {
  if(msg.content.indexOf("zon!avatar ") == 0){
      bot.createMessage(msg.channel.id, msg.mentions[0].avatarURL);
    console.log("o" +msg.author.username+" Usou o comando zon!avatar")
}
    else if(msg.content === "zon!avatar") {
      bot.createMessage(msg.channel.id, msg.author.avatarURL)
    }
 if(msg.content.indexOf("zon!server avatar") == 0){
   bot.createMessage(msg.channel.id, msg.channel.guild.iconURL);
}
});
bot.on("guildMemberAdd", (guild, member) => {
    var response = `Oh olá, ${member.mention} seja bem vindo ao ${guild.name} :wink: !`;

    bot.createMessage(guild.defaultChannel.id, response);
});

bot.on("guildMemberRemove", (guild, member) => {
    var response = `Até mais ** ${member.user.username} ** sentiremos sua falta!`;

    bot.createMessage(guild.defaultChannel.id, response);
                                                                          });
bot.on("messageCreate", (msg) => {
  if(msg.content.indexOf("nope hehe") == 0){
    bot.createMessage(msg.channel.id, "Parabens tu achou um esteregui deixado pelo <@253564007171096586>, agora toma uma pessoa em fogo https://giphy.com/gifs/H0um7u7SEhZxm  ")
  }
});
bot.on("messageCreate", (msg) => {
  if(msg.content.indexOf("zon!realtime") == 0){
    bot.createMessage(msg.channel.id, 'Agora as Horas são ' + moment().format('h:mm:ss a') + '');
}
});
bot.on("messageCreate", (msg) => {
  if(msg.content.indexOf("zon!botinfo") == 0){
    bot.createMessage(msg.channel.id, {embed: {
      author:{name:'Informações e agradecimentos especiais do bot:', icon_url: bot.user.avatarURL},
      thumbnail:{url: bot.user.avatarURL},
      color: Math.floor(Math.random() * 47148),
      fields:[
          {
              name: 'Library:',
              value: 'Eris 0.6.0, Moment.js(coisas que envolvem tempo)'
          },
          {
              name: 'Criador do bot:',
              value: '<@253564007171096586>'
          },
          {
              name: 'Prefixo do bot:',
              value: 'zon! e zon#(Creator only)'
          },
          {
              name: 'Entrou no server no dia:',
              value:  moment(msg.guild.joinedAt).format('LL')
          },
          {
              name: 'Agradecimentos Especiais:',
              value: 'Obrigado ao: \nVelcro: ensinou a fazer o bot \nSky: Fez o bot \nZekeeh: Corrigiu a maioria dos code que eu fiz xd \ne especialmente a VOCÊ que está usando o bot, seu fofeneo'
          }
      ]
  }});
  }
  if((msg.content.indexOf("zon#eval") == 0) && (msg.author.id == "253564007171096586")){
  try{
  var prfx = msg.content.slice(9);
   bot.createMessage(msg.channel.id, eval(prfx));
 } catch(err){
          bot.createMessage(msg.channel.id, {embed:{title:':x: | PARECE QUE UM ERRO FOI ACHADO NÃO É MESMO', description: '```' + err.response + '\n' + err.stack + '```'}, color: Math.floor(Math.random() * 47148), })
      }
  }
})
bot.on("messageCreate", (msg) => {
  if(msg.content.indexOf(prefix + "serverinfo") == 0){
    bot.createMessage(msg.channel.id, {embed: {footer:{text: 'Pedido por ' + msg.author.username + '', icon_url: msg.author.avatarURL},
      author:{name:'Sobre o server '+ msg.guild.name + ':', icon_url: msg.guild.iconURL},
      color: Math.floor(Math.random() * 47148),
      fields:[
          {
              name: 'O server foi criado em:',
              value: moment(msg.guild.createdAt).format('LL')
          },
          {
              name: 'Dono do servidor:',
              value: 'Dono: <@!' + msg.guild.ownerID + '> \nId:' + msg.guild.ownerID + ''
          },
          {
              name: 'Região do servidor:',
              value: msg.channel.guild.region
          },
          {
              name: 'Numero de membros:',
              value: msg.channel.guild.memberCount
          },
          {
              name: 'Guild Id',
              value:  msg.channel.guild.id
          },
          {
              name: 'Nivel de verificação',
              value:  msg.guild.verificationLevel
          }
      ]
  }});
}
})
bot.on("messageCreate", (msg) => {
  if(msg.content.indexOf(prefix + 'h invite') == 0){
    bot.createMessage(msg.channel.id, {embed: {title: 'Sobre o comando zon!invite', description: 'zon!invite - aqui você podera acha o server do bot e o link para colocar o bot no seu server \n \n \n**Aliases:** \nz!i, z!inv', color: Math.floor(Math.random() * 47148),}})
  }

  if(msg.content.indexOf(prefix + 'h kill') == 0){
    bot.createMessage(msg.channel.id, {embed: {title: 'Sobre o comando zon!kill',
   fields:[
     {
       name: 'Usagem:',
       value: 'zon!kill (mention) - Mata a pessoa mencionada \nexemplo: zon!kill <@253564007171096586> \n \nzon!kill - Cometa suicidio \n \n**Aliases** z!k'
     }
   ]
  }})
  }
})
bot.on('messageCreate', (msg) => {
  if(msg.content.indexOf('zon!say') == 0){
    bot.createMessage(msg.channel.id, ':speech_balloon: | **'+ msg.content.slice(7) + '**');
  }
})
bot.on('messageCreate', (msg) => {
  if((msg.content.indexOf('zon#turnoff') == 0) && (msg.author.id == "253564007171096586")){
    bot.createMessage(msg.channel.id, 'AAAAAAAAAA VAI DAOCU SEU MERDA VIADO DO KRL SÓ QUERIA FAZER TRABALHO ESCRAVO O FDP *windows xp turn off sound*' );
  }

  if((msg.content.indexOf('AAAAAAAAAA VAI DAOCU SEU MERDA VIADO DO KRL SÓ QUERIA FAZER TRABALHO ESCRAVO O FDP *windows xp turn off sound*') == 0) && (msg.author.id == "300268123599405057"))
  console.log(process.exit());
})
bot.on('messageCreate', (msg) => {
  if(msg.content.indexOf('zon!kill ') == 0){
    bot.createMessage(msg.channel.id, {embed: {title:'**' + msg.author.username + '** matou o/a ' + msg.mentions[0].username + '', image: {url: 'https://68.media.tumblr.com/043296378155d0ac7fa386538d4f5786/tumblr_olr40qxxuL1w4oiizo1_1280.gif'}, color: Math.floor(Math.random() * 47148)}})
}
else if(msg.content === 'zon!kill') {
  bot.createMessage(msg.channel.id, {embed: {title: '**' + msg.author.username + '** cometeu suicidio', image: {url: 'https://media.giphy.com/media/vkwAeqMEUSaoU/giphy.gif'}, color: Math.floor(Math.random() * 47148)}});
}
})
bot.connect()
