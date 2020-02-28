const WebSocket = require('ws'); 

const was = new WebSocket.Server({ port : 3030}); // was의 포트 3030

was.on('connection', function connection(ws) { // was 연결 한다.
    ws.on('message', function incoming(data) { // 메시지가 오면 data.. clients.. 각각의 clients에게 
        was.clients.forEach(function each(client) { // 클라이언트가 ws가 아니고 클라이언트의 웹소켓이 열려있으면 보낸다. 인거 같은데
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    })
});