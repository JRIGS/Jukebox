module.exports = {
    name: 'clear',
    description: 'clear x amount of messages',
    async execute(message, args){
        if(!args[0]) return message.reply("Enter the amount of messages you want to clear");
        if(isNaN(args[0])) return message.reply("Enter a real number...");

        if (args[0] > 10) return message.reply('You cannot delete more than 10 messages');
        if (args[0] < 1) return message.reply('You must delete atleast one message');

        await message.channel.messages.fetch({limit: args[0]})
        .then(messages => {
            message.channel.bulkDelete(messages);
        })

    }
}