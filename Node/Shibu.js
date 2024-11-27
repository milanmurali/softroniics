const http = require("http")
http.createServer((req, res) => {
    if (req.url === "/1") {
        res.write("hallelujah")
        res.end()
    }
    else if (req.url === "/2") {
        res.write("stotram")
        res.end()
    }
}).listen(6969, () => {
    console.log("oodunnund")
})