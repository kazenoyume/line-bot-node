var request = require("request");
var cheerio = require("cheerio");

var sendLine = function (result, uid) {
    request(
        {
            url: "https://floating-cliffs-58017.herokuapp.com/pushmsg.php?text=" + encodeURIComponent(result) + "&UID=" + uid,
            method: "GET"
        }, function (error, response, body) {
            if (error || !body) {
                return;
            }
        });
};

module.exports = function (status) {
    var agent = getAgent();
    request(
        {
            url: "https://buy.gamer.com.tw/atmItem.php?sn=23024",
            method: "GET",
            headers: {
                'User-Agent': agent
            }
        }, function (error, response, body) {
            if (error || !body) {
                return;
            }
            // 爬完網頁後要做的事情
            var $ = cheerio.load(body);
            var result = [];
            var titles = $('.ES-buy').html();
            console.log(titles);
            var location;
                var date = new Date();
                //console.log(titles[i]);
                console.log('時間:' + date + '--缺貨');
                if(status===1 ){

                    if (titles!=null &&titles.indexOf('order_new.gif')>= 0 ) {
                        sendLine('有貨 ' + "https://buy.gamer.com.tw/atmItem.php?sn=23024", 'Uaa0637612b1059d6b2d584a2b5bd2889');
                    }else{
                        sendLine('缺貨 ' + "https://buy.gamer.com.tw/atmItem.php?sn=23024", 'Uaa0637612b1059d6b2d584a2b5bd2889');
                    }
                }else{
                    if (titles!=null &&titles.indexOf('order_new.gif')>= 0 ) {
                        sendLine('有貨 ' + "https://buy.gamer.com.tw/atmItem.php?sn=23024", 'Uaa0637612b1059d6b2d584a2b5bd2889');
                    }
                }


        });
};

function getAgent() {
    var agent = '';
    var maxNum = 17;
    var minNum = 0;
    var n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    switch (n) {
        case 0:
            agent = "User-Agent:Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50";
            break;
        case 1:
            agent = "User-Agent:Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50";
            break;
        case 2:
            agent = "User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0";
            break;
        case 3:
            agent = "User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko";
            break;
        case 4:
            agent = "User-Agent:Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0;";
            break;
        case 5:
            agent = "User-Agent:Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)";
            break;
        case 6:
            agent = "User-Agent:Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)";
            break;
        case 7:
            agent = "User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)";
            break;
        case 8:
            agent = "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1";
            break;
        case 9:
            agent = "User-Agent:Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1";
            break;
        case 10:
            agent = "User-Agent:Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11";
            break;
        case 11:
            agent = "User-Agent:Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11";
            break;
        case 12:
            agent = "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11";
            break;
        case 13:
            agent = "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1";
            break;
        case 14:
            agent = "User-Agent:Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1";
            break;
        case 15:
            agent = "User-Agent:Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11";
            break;
        case 16:
            agent = "User-Agent:Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11";
            break;
        default:
            agent = "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11";
    }
    return agent;

}