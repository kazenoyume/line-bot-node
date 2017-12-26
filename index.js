var request = require("request");
let linebot = require('linebot'),
    express = require('express');
var cheerio = require("cheerio");
var phantom = require("phantom");
const util = require('util');
let bot = linebot({
   // channelId: '1511876385',
   // channelSecret: 'c6e4c7aadff9c795ac2d18ad56fc36cf',
   // channelAccessToken: 'VkVYO1PZY9uGKGe8KK4Jr+HiUJqYjRj44pvK4Bt16cSn664s6l4MREDThTK4V2xICIsN6WHEz5fQbR6cEJC1/A/pfhpGg3knwiu1pT2qVYf5FEORD4HgfNQ8f/0yyyQd8jYkQss3zfdCV/Nc/HtgFgdB04t89/1O/w1cDnyilFU='
    channelId: '1522300741',
    channelSecret: '455f74dac591d18ede2d996eb202f440',
    channelAccessToken:'PMYTOjEFFN7ZnBSMDdKUmtgkjod7Xkukm4g2LNyFGB7q6FsPFym2zhiUsN7GWbb5DkJEV1nPsOqmvZ81MaUTUdokXu0pxd/ZM9Vt5nxGdghJkveeo2MfWR7mhY6EuSfMv94qG6rZmkDPLn2Cz+ik1QdB04t89/1O/w1cDnyilFU='

});


const linebotParser = bot.parser();
const app = express();
var timer;
app.post('/webhook', linebotParser);

pcHome();
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
        console.log(msg);
    });

// 在 localhost 走 8080 port
    let server = app.listen(process.env.PORT || 8080, function () {
        let port = server.address().port;
        console.log("My Line bot App running on port", port);
    });
};

function pcHome() {
    clearTimeout(timer);
    var urlString = 'http://ecshweb.pchome.com.tw/search/v3.3/?q=%E5%B0%8F%E7%B1%B3-%E7%B1%B3%E5%AE%B6%E6%8E%83%E5%9C%B0%E6%A9%9F%E5%99%A8%E4%BA%BA&scope=all&sortParm=rnk&sortOrder=dc&min=8000&max=8895';
    phantom.create().then(function (ph) {
        _ph = ph;
        return ph.createPage();
    }).then(function (page) {
        _page = page;

        return _page.open(urlString);
    }).then(function (status) {
        // console.log(status);
        return _page.property('content')
    }).then(function (content) {

        // console.log(content);
        // 爬完網頁後要做的事情
        var $ = cheerio.load(content);
        var result = [];
        var titles = $("#ItemContainer");
        var location;

        let weathers = []

        $('#ItemContainer .col3f .c3f .fieldset_box .site_btn').each(function (i, elem) {
            if ($(this).text().split('\n').indexOf('購物車') >= 0) {
                console.log($(this).text().split('\n'));
                bot.push('Ued66e12d2e4fa25fd056078d44170a41', '有貨 ' + urlString);
            } else {
                var date = new Date();
                console.log('時間:' + date + '--缺貨');
            }
        })

    }).then(function () {
        _page.close();
        _ph.exit();


    }).catch(function (e) {
        console.log(e);
        _ph.exit();

    });
    timer = setInterval(pcHome, 60000); //每半小時抓取一次新資料
};