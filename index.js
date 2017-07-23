console.log("prepping...");
const disc=require('discord.js');
const async=require('async');
const ini=require('ini');
const fs=require('fs');
var config=ini.parse(fs.readFileSync('config.ini','utf-8'));
var bot= new disc.Client();
var kill=false;
var go=[];
go.push(config.options.defemoji);
var killu=config.options.killusers;
bot.on('ready',()=>{
	console.log(`Ready.\nhttps://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=64`);
});
bot.on('message',(message)=>{
	if(config.options.servers.match(message.guild.id)){
		let txt=message.content.match(/^;sete ((?:[^:a-z0-9.,]{1,3}(?: |$))+)/i);
		if(txt){
			go=txt[1].split(' ');
			console.log(`User ${message.member.displayName}<${message.member.id}> updated reaction set.`);
		}else if(message.content.match(/^;kille$/i)&&killu.indexOf(message.member.id)!=-1){
			kill=true;
			console.log(`uh oh, killed by ${message.member.displayName}<${message.member.id}>.`)
		}
		if(!kill&&Math.random()<=parseFloat(config.options.prob)){
			async.eachLimit(go,1,(str,callback)=>{
				message.react(str)
				.then((reaction)=>{
					callback();
				})
				.catch((error)=>{
					console.log('Error:\n\n'+error);
					callback(error);
				});
			},(err)=>{
				if(err){
					console.log(`ERROR "emoji failed" [reactbot.index.37]:\n${err}`);
				}else{
					console.log(`Reacted to message from ${message.member.displayName} on ${message.guild.name} #${message.channel.name}.`);
				}
			});
		}
	}
});

bot.login(config.setup.token);
