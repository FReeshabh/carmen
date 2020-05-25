require("dotenv").config()
const Discord = require("discord.js")
const fs      = require("fs")
const client  = new Discord.Client()

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
  })
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if (msg.content == "ping") {
        msg.reply("Pong!")
    }
    if (msg.content == "sex me daddy" ) {
        msg.reply("https://www.complex.com/pop-culture/2016/04/dragons-sex-cars-reddit")
    }
})

client.on("guildMemberAdd", member => {
    member.send("Welcome to the server, please be aware. We eat ass")
})

client.on("message", message => {
    if (message.content.startsWith("!kick")) {
        const member = message.mentions.members.first()

        if (!member) {
            return message.reply(
                'Bitch who you wanna kick?'
            )
        }

        if (!member.kickable) {
            return message.reply('This bitch a king. You cannot kick this user')
        }
        return member
        .kick()
        .then(() => message.reply('${member.user.tag} was kicked.'))
        .catch(error => message.reply('Sorry, an error was occured.'))
    }
})

client.login(process.env.BOT_TOKEN)
