const http = require("http")
http.createServer((req, res) => {
    res.write("hallelujah")
    res.end()
}).listen(6969, () => {
    console.log("oodunnund")
})