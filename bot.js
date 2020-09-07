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

client.on('message', message=>{
  if(message.content.startsWith(prefix + 'setsubmit')){
      if(message.channel.type == 'dm') return;
      if(message.author.bot) return;
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**ليس لديك برمشن manage guild**`)
     let args = message.content.split(' ').slice(1).join(' ');
     if(!args) return message.channel.send(`**apply**`).then(msg=>{
         msg.delete(2000)
         message.delete(3000)
     })
     let channel = message.guild.channels.find('name', args)
     if(!channel) return message.channel.send(`**لم استطيع العثور على الروم**`)
     let channelid = channel.id
     let submit = require('./submit.json')
     submit[message.guild.id] = {
         channel : channelid,
         state : "on"
     }
     fs.writeFile('submit.json',JSON.stringify(submit, null, 5),err=>{console.error(err)})
     message.channel.send(`**تم تحديد روم التقديمات بنجاح**`)
    }
    if(message.content.startsWith(prefix + 'submit')){
        if(message.channel.type == 'dm') return;
        if(message.author.bot) return;
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**ليس لديك برمشن manage guild**`)
        let submit = require('./submit.json')
        let args = message.content.split(' ').slice(1).join(' ');
        if(!submit[message.guild.id]) return;
       if(!args) return message.channel.send(`${prefix}sumbit on / off`)
        if(args == 'on'){
        submit[message.guild.id].state = 'on'
        fs.writeFile('submit.json',JSON.stringify(submit,null,5),err=>{console.error(err)})
        message.channel.send(`**تم تشغيل التقديمات**`)
     }
     if(args == 'off'){
        submit[message.guild.id].state = 'off'
        fs.writeFile('submit.json',JSON.stringify(submit,null,5),err=>{console.error(err)})
        message.channel.send(`**تم توقيف التقديمات **`)
     }
    } 

  if(message.content.startsWith(prefix + 'تقديم')){
      if(message.author.bot) return;
      if(message.channel.type == 'dm') return;
      let submit = require('./submit.json');
      let sure = '';
      let one = '';
      let two = '';
      let three = '';
      let four = '';
      let five = '';
      let six = '';
      let seven = '';
      let filter = m => m.author.id === message.author.id
    if(!submit[message.guild.id]) return;
      if(submit[message.guild.id].state == 'off') return message.channel.send(`**التقديم موقف الان**`)
        message.channel.send(`**هل انت متأكد من تقديمك ؟ نعم او لا**`).then(kinggamer=>{
        message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] }).then(alpha=>{
            sure = alpha.first().content;
            if(sure == 'نعم'){
                kinggamer.edit(`اسؤال الاول`)
                message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] }).then(a=>{
                 one = a.first().content
                 a.first().delete()
                 kinggamer.edit(`السؤال الثاني`)
                 message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] }).then(b=>{
                  two = b.first().content
                  b.first().delete()
                  kinggamer.edit(`السؤال الثالث`)
                  message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] }).then(c=>{
                   three = c.first().content
                   c.first().delete()
                   kinggamer.edit(`السؤال الرابع`)
                   message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] }).then(d=>{
                    four = d.first().content
                    d.first().delete()
                    kinggamer.edit(`السؤال الخامس`)
                    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] }).then(e=>{
                     five = e.first().content
                     e.first().delete()
                     kinggamer.edit(`السؤال السادس`)
                     message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] }).then(f=>{
                      six = f.first().content
                      f.first().delete()
                      kinggamer.edit(`السؤال السابع`)
                      message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] }).then(g=>{
                       seven = g.first().content
                       g.first().delete()
                       let embed = new Discord.RichEmbed()
                       .setTitle(`**تقديم جديد**`)
                       .addField('اسم المقدم', message.author.username)
                       .addField('اي دي المقدم', message.author.id)
                       .addField('جواب السؤال الاول', one)
                       .addField('جواب السؤال الثاني', two)
                       .addField('جواب السؤال الثالث', three)
                       .addField('الرابع', four)
                       .addField('الخامس', five)
                       .addField('السادس', six)
                       .addField('السابع', seven)
                       .setTimestamp()
                       .setThumbnail(message.author.avatarURL)
                       let channel = message.guild.channels.get(submit[message.guild.id].channel)
                       channel.send(embed)
                      
                  })
                 })
                })
               })
              })
             }) 
            })
        }
            else{
                message.delete(2000)
                kinggamer.delete(2500)
            }
        })
        })
  }
})

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
});*

client.login(process.env.BOT_TOKEN);
