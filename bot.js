const Discord = require("discord.js");
const client = new Discord.Client();

var prefix ="!";

client.on('ready', function(){
    var ms = 10000 ;
    var setGame = ['StoreAY','BUY NOW', 'StoreAY.Is-Best.Net'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/StoreAY`);
    }, ms);
console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> MrBloodsBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
});
          
client.on('message', msg => {
       if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('**لا تملك الصلاحيات الكافيه**' );
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

 client.on('message', message => {
    var p = message.mentions.members.first();
    var reason = message.content.split(" ").slice(2).join(' ');
    var log = message.guild.channels.find('name', 'ban-log'); //سوي روم اسمها ban-log
   if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.channel.send("`You dont have BAN_MEMBERS Permission!`");
    if(message.content.startsWith(`${prefix}ban`)){
        if(!p) return message.reply(`**منشن الشخص**`);
        if(!reason) return message.reply(`**حط سبب
('1', "**نشر روابط بدون اذن الادارة**")
('2', "**نشر في الخاص**")
('3', "**اسم غير لائق**")
('4', "**صوره غير لائقه**")
('5', "**سب الاهل**")
('6', "**سب**")
('7', "**تقليل احترام**")
('8', "**تحرش**")
**`);
        if(!p.bannable) return message.reply(`**م اقدر ابند شخص من الستاف**`);
        reason = reason.replace('1', "**نشر روابط بدون اذن الادارة**");
        reason = reason.replace('2', "**نشر في الخاص**");
        reason = reason.replace('3', "**اسم غير لائق**");
        reason = reason.replace('4', "**صوره غير لائقه**");
        reason = reason.replace('5', "**سب الاهل**");
        reason = reason.replace('6', "**سب**");
        reason = reason.replace('7', "**تقليل احترام**");
        reason = reason.replace('8', "**تحرش**");
        reason = reason.replace
        reason = reason.replace
        var embed = new Discord.RichEmbed()
        .setAuthor(`User Banned!`)
        .addField(`Name ♣`, `<@${p.id}>`)
        .addField(`By ♣`, `<@${message.author.id}>`)
        .addField(`Reason ♣`, reason)
        .setTimestamp()
        .setColor("BLACK")
        .setFooter(` `)
        p.ban();
            message.delete();
        log.send({embed});
       
    }
}); 

client.on('raw', packet => {
if(!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
if (packet.t == 'MESSAGE_REACTION_ADD') {
if(packet.d.message_id == '752288614582583408') { // ايدي المسج
let emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
if(emoji == '📧'){ // الايموجي الي بيضغط عليه عشان يسوي تكت
let u = client.users.get(packet.d.user_id);
let channel = client.channels.get(packet.d.channel_id);
if(channel.type == "dm"||!channel.guild) return; // ._.
channel.fetchMessage(packet.d.message_id).then(message => {
let re = message.reactions.get(emoji);
re.remove(u); // عشان بعد ما يحط الايموجي ينشال
let CH = message.guild.channels.find(r => r.id == '752288795273199867'); // ايدي الكاتوجري الي بتنحط تحتها التكتات
if(!CH) return;
channel.guild.createChannel(`ticket-${u.username}`,
{
  type: 'text',parent:CH,reason:'Reaction Tickets System',
  permissionOverwrites: [{
    id:  channel.guild.id,
    deny: ['READ_MESSAGES']
  },{
    id: u.id,
    allow: ['SEND_MESSAGES','READ_MESSAGES','ATTACH_FILES','READ_MESSAGE_HISTORY']
  },{
    id: '622121717363638282', // ايدي رتبه السبورت
    allow: ['SEND_MESSAGES','READ_MESSAGES','ATTACH_FILES','READ_MESSAGE_HISTORY']
  }]
})
}) }
 }
}
});

/**client.on("message", message => {
  if (message.content.startsWith("Site")) {
    let embd = new Discord.RichEmbed()
      .setColor('RED')
      .setDescription("hello")
    message.channel.send(embd)
  }
})**/

client.on('guildMemberAdd', mem => {
let gg = mem.guild.roles.find(hh => hh.name.includes('StoreAY,'));
if(!gg) return
mem.addRole(gg).catch(gg => console.log(gg.message))
});

const guild = client.guilds.get("621834641367629827");
const channelCount = client.channels.get("629956274917867521");
 
client.on("guildMemberAdd", (user) => {
 
const membercount = guild.members.size;
 
channelCount.setName(`Member Count : ${membercount}.`);
 
});
 
client.on("guildMemberRemove", (user) => {
 
const membercount = guild.members.size;
 
channelCount.setName(`Member Count : ${membercount}.`);
 
});

 client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.find("name","join");
        if(!welcomer) return;
        if(welcomer) {
           moment.locale('ar-ly');
           var h = member.user;
          let norelden = new Discord.RichEmbed()
          .setColor('PINK')
          .setThumbnail(h.avatarURL)
          .setAuthor(h.username,h.avatarURL)
          .addField('وقت انشاء حسابك بالديسكورد: ',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
           .addField('متى اخر مرة دخلت سيرفرنا: ',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true) 
           .setFooter(`${h.tag}`,"https://cdn.discordapp.com/attachments/679390274295955467/751829922237907013/storeay.png")
       welcomer.send({embed:norelden});          
                 
   
        }
        });

client.on('message', msg => {
  if(msg.content === '!invite')
  msg.reply('https://discord.com/api/oauth2/authorize?client_id=752185674236559501&permissions=8&scope=bot')
});

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose: **StoreAY | Offical Discord Server,** :rose: 
  :crown: Have fun!: ${member}:crown:  
  You're number: ${member.guild.memberCount} 
  **StoreAY | Offical Discord Bot,** `) 
  }).catch(console.error)
  })

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**Thank you for adding the bot to your server. **Bot By MrBloods**`)
        guild.owner.send(embed)
  });

client.on('message',async message => {
if(message.author.bot || message.channel.type === 'dm') return;
let args = message.content.split(' ');
let author = message.author.id;
if(!credits[author]) credits[author] = {
credits: 0
}
fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
if(args[0].toLowerCase() == `${prefix}points`) {
const mention = message.mentions.users.first() || message.author;
const mentionn = message.mentions.users.first();
if(!args[2]) {
message.channel.send(`**${mention.username}, your :point:  points balance are \`$${credits[mention.id].credits}\`**`)
} else if(mentionn && args[2]) {
if(isNaN(args[2])) return message.channel.send(`**:x: | Error**`);
if(args[2] < 1) return message.channel.send(`**:x: | Error**`);
if(mention.bot) return message.channel.send(`**:x: | Error**`);      
if(mentionn.id === message.author.id) return message.channel.send(`**:x: | Error**`);
if(args[2] > credits[author].credits) return message.channel.send(`**:x: | Error , You Don't Have Enough Credit**`);
if(args[2].includes("-")) return message.channel.send(`**:x: | Error**`);
let resulting = Math.floor(args[2]-(args[2]*(5/100)));
let tax = Math.floor(args[2]*(5/100));
let first = Math.floor(Math.random() * 9);
let second = Math.floor(Math.random() * 9);
let third = Math.floor(Math.random() * 9);
let fourth = Math.floor(Math.random() * 9);
let num = `${first}${second}${third}${fourth}`;
let canvas = Canvas.createCanvas(108 , 40)
let ctx = canvas.getContext('2d');
const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/608278049091223552/617791172810899456/hmmm.png");
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
ctx.font = '20px Arial Bold';
ctx.fontSize = '20px';
ctx.fillStyle = "#ffffff";
message.channel.send(`**${message.author.username}, Transfer Fees: \`${tax}\`, Amount: \`$${resulting.toLocaleString()}\`**
type these numbers to confirm: `).then(essss => {
ctx.fillText(num, canvas.width / 2.4, canvas.height / 1.7);
message.channel.sendFile(canvas.toBuffer()).then(m => {
message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors:['time'] }).then(collected => {
if(collected.first().content === num) {
message.channel.send(`**:moneybag: | ${message.author.username}, Done Trans \`$${resulting.toLocaleString()}\` To ${mentionn}**`);
mention.send(`**:money_with_wings: | Transfer Receipt \`\`\`You Have Received \`$${resulting.toLocaleString()}\` From User ${message.author.username}; (ID (${message.author.id})\`\`\``);
m.delete();
credits[author].credits += Math.floor((-resulting.toLocaleString()));
credits[mentionn.id].credits += Math.floor((+resulting.toLocaleString()));
fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
} else {
m.delete();
essss.delete();
}
})
})
})
}else {
message.channel.send(`**:x: | Error , Please Command True Ex: \`${prefix}money [MentionUser] [Balance]\`**`);
}
}
if(args[0].toLowerCase() === `${prefix}daily`) {
let cooldown = 8.64e+7
let Daily = time[message.author.id]
if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
let times = (cooldown - (Date.now() - Daily));
message.channel.send(`**:stopwatch: |  ${message.author.username}, your daily :point: points refreshes in ${pretty(times, {verbose:true})}.**`);
fs.writeFile("./time.json", JSON.stringify(time), function(e) {
if(e)throw e;
})
}else{
let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
credits[author].credits += ammount;
time[message.author.id] = Date.now();
message.channel.send(`**:atm:  | ${message.author.username}, you received your :point:  ${ammount} daily points!**`);
fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
if(e)throw e;
})
}
}
}); // By: FireKing , Codes

client.login(process.env.BOT_TOKEN);
