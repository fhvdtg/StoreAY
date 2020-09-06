const Discord = require("discord.js");
const client = new Discord.Client();

let xp = require('./xp.json'); //سوي ملف بأسم xp.json

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

client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    var prefix = "!";

    let Addxp = Math.floor(Math.random() * 6) + 8;

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level + 1;
    let nextLvL = xp[message.author.id].level * 1000; //كل كم اكس بي لحتا يرتفع لفله انصحكم تخلونه فوق ال الف
    xp[message.author.id].xp = curxp + Addxp;
    if(nextLvL <= xp[message.author.id].xp){
        xp[message.author.id].level = xp[message.author.id].level + 1;
        
        let lvlup = new Discord.RichEmbed()
        .setTitle('Level Up!')
        .setColor('RANDOM')
        .setDescription(`New Level: `+curlvl)
        .setTimestamp()
        .setFooter(message.author.username+'#'+message.author.discriminator);
        message.channel.send(lvlup)
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if (err) console.log(err)
    });


});
client.on('message', message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    var prefix = "!";

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nextlvlxp = curlvl * 200;
    let difference = nextlvlxp - curxp

    if(message.content == prefix+"profile"){

        if(!xp[message.author.id]) {
            xp[message.author.id] = {
                xp: 0,
                level: 1,
            }
        }
        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
            if(err) console.log(err)
        });
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor('RANDOM')
        .setTitle('Your Profile.')
        .addField('XP: ', curxp, true)
        .addField('Level: ', curlvl, true)
        .setFooter(` ${difference} xp till level up `, message.author.displayAvatarURL);
        message.channel.send(embed);

    }
});

client.on("message", message => {
    var args = message.content.split(" ");
    var ownerid = "436918120184021012";// ايدي اونر البوت
    if(args[0] == prefix + "exit"){
        if(message.author.id == ownerid){
        if(!args[1]){
            return message.reply("`"+args[0]+" <server id>`");
        }
        var findserver = client.guilds.cache.find(gld => gld.id == args[1]);
        if(!findserver) {
            return message.reply("i can't find the guild");
        }
        findserver.leave()
        }
    }
});

client.login(process.env.BOT_TOKEN);
