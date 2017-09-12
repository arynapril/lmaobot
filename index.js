const discord = require('discord.js');
const bot = new discord.Client();
bot.on("message", (message) => {
if (message.author.id !== 'YOUR ID HERE') return;
if (message.content.indexOf('lmao') != -1) {
    after = message.content.replace('lmao', 'lmao™')
    message.edit(after);
  }
});
bot.on("ready", () => {
    console.log("I am ready!");
});
bot.login('YOUR-TOKEN-HERE');
