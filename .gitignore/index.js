
const Discord = require("discord.js");
const low = require("lowdb")
const FileSync = require("lowdb/adapters/fileSync")

const adapter = new FileSync("database.json")
const db = low(adapter);

db.defaults ({ histoires: [],  xp: []})
   .write()
var bot = new Discord.Client();
var prefix = ("?");
var randnum = 0;


bot.on("ready" , () => {
    bot.user.setPresence({ game: { name: "[?help]" , type: 0}});
    console.log("bot ready")
});

bot.login("Mzg0NzQ4NDkxNzE0MzMwNjM0.DP9cpg.iaCsTONFHYkx9Xgqipx4fHAJk6U");


bot.on("message" , message => {
    if (message.content === "ping"){
        message.reply("**pong**");
        console.log("ping pong");
    }

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substr(prefix.lenght).split(" ");

    switch (args[0].toLowerCase()){

        case "newstory":
        var value = message.content.substr(10);
        var auther = message.author.id;
        var number = db.get("histoires").map("10").value();
        console.log(value);
        message.reply("Ajout de l'histoire a la base de donné")

        db.get("histoires")
            .push({ id: number + 1, story_value: value, story_author: author})
            .write();

        break;
    }
})
bot.on("message" , message => {
    
    
        if (message.content === "qui est trotro"){
            message.reply("**trotro est un vieu plat boost**");
            console.log("qui est trotro");
        }
        if (message.content === "qui est tango"){
            message.reply("**tango et mon créateur et le meilleur joueur du monde !!**");
            console.log("qui est tango")
        }
    
        if (message.content === "Comment tu vas TangoBot ?"){
            random();
            if (randnum == 0){
                message.reply("**tg va jouer à adibou**");
                console.log(randnum);
            }
            if (randnum == 3){
                message.reply("**j'ai autre chose faire que répondre aux petits cons qui on pas d'amis et qui ducoup viennent me parler!!!**");
                console.log(randnum);
            }
            if (randnum == 1){
                message.reply("**tg connard va te faire saupoudrer le cul de talk par ta mère**\n__**BIEN CORDIALEMENT**__");
                console.log(randnum);
            }
            if (randnum == 2){
                message.reply("**Oui merci de prendre soin de moi!!!!**");
                console.log(randnum);
            }
        }
        
    })
bot.on("message" , message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00E87C")
        .addField("Commandes du bot:", "  - **?help** : affiche les commandes du bot")
        .addField("Interaction:", "- **ping**\n- **Comment tu vas TangoBot ?** :__**ATTENTION JE NE SUIS PAS RESPONSABLE SI LE BOT FAIS PLEURER LES KIKOOS!!!**__")
        
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot :\n");
        console.log("Commande help TangoBot demandée");
    }


})

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() *(max - min +1) + min );
}
