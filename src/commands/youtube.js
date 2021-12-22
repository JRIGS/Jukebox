module.exports = {
    name: 'youtube',
    description: 'sends yt link',
    execute(message, args){
        message.channel.send('https://www.youtube.com');

    }
}