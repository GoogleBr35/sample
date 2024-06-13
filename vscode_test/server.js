const http = require("http");
const PORT = 3000;
const html = require("fs").readFileSync("./test.html");

// webサーバを作る
const server = http.createServer((req, res) => {
    // ブラウザからアクセスが来た時の処理
    res.writehead(200, {"Conten-Type": "text/html"});
    res.write(html);
    res.end();
});

server.listen(PORT, () => {
    console.log("server running.");
});