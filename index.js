var app = require('express')(),
    port = process.env.PORT || 3000,
    ip = process.env.IP || '127.0.0.1';

app.get('/', function(req, res) {
    res.send("Hello, world!");
});

var server = app.listen(port, ip, function() {
    console.log("Listening on %s:%s", server.address().address, server.address().port);
});
