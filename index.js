
let linebot = require('linebot'),
    express = require('express');

var pchome = require('./phantomCrawler.js');
var ps4 = require('./normalCrawler.js');
let bot2 = linebot({
    channelId: '1511876385',
    channelSecret: 'c6e4c7aadff9c795ac2d18ad56fc36cf',
    channelAccessToken: 'VkVYO1PZY9uGKGe8KK4Jr+HiUJqYjRj44pvK4Bt16cSn664s6l4MREDThTK4V2xICIsN6WHEz5fQbR6cEJC1/A/pfhpGg3knwiu1pT2qVYf5FEORD4HgfNQ8f/0yyyQd8jYkQss3zfdCV/Nc/HtgFgdB04t89/1O/w1cDnyilFU='

});
let bot = linebot({
    channelId: '1522300741',
    channelSecret: '455f74dac591d18ede2d996eb202f440',
    channelAccessToken:'PMYTOjEFFN7ZnBSMDdKUmtgkjod7Xkukm4g2LNyFGB7q6FsPFym2zhiUsN7GWbb5DkJEV1nPsOqmvZ81MaUTUdokXu0pxd/ZM9Vt5nxGdghJkveeo2MfWR7mhY6EuSfMv94qG6rZmkDPLn2Cz+ik1QdB04t89/1O/w1cDnyilFU='
});

const linebotParser = bot.parser();
const linebotParser2 = bot2.parser();
const app = express();

app.post('/webhook', linebotParser);
app.post('/webhook2', linebotParser2);


ps4(0);
setInterval(ps4,5*60*1000);

_bot();

function _bot() {
    bot.on('message', function (event) {
        // 把收到訊息的 event 印出來
        var msg = "groupId:" + event.source.groupId + "  userId:" + event.source.userId + " text:" + event.message.text;

        if (event.message.type = 'text') {
            var msg = event.message.text;
            event.reply(msg).then(function(data) {
                // success
                console.log(msg);
            }).catch(function(error) {
                // error
                console.log('error');
            });
        }
        if (event.message.text === 'now') {
            event.reply(msg).then(function(data) {
                // success.
                ps4(1);
                console.log(msg);
            }).catch(function(error) {
                // error
                console.log('error');
            });
        }


        console.log(msg);
    });
    bot2.on('message', function (event2) {
        // 把收到訊息的 event 印出來
        var msg = "groupId:" + event2.source.groupId + "  userId:" + event2.source.userId + " text:" + event2.message.text;
        if (event2.message.text === 'info') {
            event2.reply(msg).then(function(data) {
                // success
                console.log(msg);
            }).catch(function(error) {
                // error
                console.log('error');
            });
        }

        console.log(msg);
    });
// 在 localhost 走 8080 port
    let server = app.listen(process.env.PORT || 8080, function () {
        let port = server.address().port;
        console.log("My Line bot App running on port", port);
    });
};

