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



client.login(process.env.BOT_TOKEN);
