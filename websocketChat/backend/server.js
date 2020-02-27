const WebSocket = require('ws');

const was = new WebSocket.Server({ port : 3030});

was.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        was.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    })
});