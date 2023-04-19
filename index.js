
const {Client, GatewayIntentBits} = require('discord.js');      //for interaction with discord api
const { token } = require('./token.json');  //for retrieving token from local file

//client for interacting with discord
const client = new Client({ 
    intents : 
    [ 
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

//login
client.login(token);

//on successful connection w/ discord
client.on('ready', () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

//example of event listener for a message to trigger sending a gif
client.on('messageCreate', message => {
    if (message.author.bot) return false; 
    //to test working
    console.log(`Message from ${message.author.username}: ${message.content}`);

    if(message.content === '!TheCrowdCheers'){
        const gifUrl = 'https://cdn.discordapp.com/attachments/1095410835515506961/1096467438557732986/Xena_Warrior_Princess_S01E04_-_Cradle_of_Hope.mp4_1.gif';
        message.channel.send(gifUrl);
    }
    if(message.content === '!NowKiss'){
        const gifUrl = 'https://tenor.com/view/xwp-love-couple-gabrielle-lesbian-gif-20599559';
        message.channel.send(gifUrl);
    }
});
