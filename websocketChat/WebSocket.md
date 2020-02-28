# MDN 웹소켓

WebSocket은 ws프로토콜을 기반으로 클라이언트와 서버 사이에 지속적인 완전 양방향 연결 스트림을 만들어 주는 기술이다. 일반적인 웹소켓 클라이언트는 사용자의 브라우저일 것이지만, 그렇다고 해서 이 프로토콜이 플랫폼에 종속적이진 않다.

WebSocket 프로토콜을 사용하여 통신하기 위해서는 WebSocket 객체를 생성해야 한다.
이 객체는 자동으로 서버로의 연결을 열려고 할 것이다.

    WebSocket WebSocket(
        in DOMString url,
        in optional DOMString protocols
    );

url은 연결할 URL으로 이것은 WebSocket 서버가 응답할 URL이어야한다.

protocols 하나의 포로토콜 문자열, 또는 프로토콜 문자열의 배열이다. 이 문자열들은 서브 프로토콜을 지정하는데 사용되어 하나의 서버가 여러개의 WebSocket 서브 프로토콜을 구현할 수 있또록 해준다. 예를들어, 하나의 서버가 처리하는 상호작용이 지정된 protocols에 따라 달라지도록 할 수 있다. 만약 프로토콜 문자열을 지정하지 않으면 빈 문자열을 넣은 것으로 간주..

그럼 여기에 넣는 거에 따라서 방이 만들어진다는 건가? 그래서 두명씩 얘기를 할 수 있따는건가?

간단 예제 
ws://www.example.com/socketserver 서버에 접속하는것을 보여준다. 이 예제에서는 커스텀 프로토콜인 'protocolOne'을 리퀘스트에 같이 지정.

    var exampleSocket = new WebScoket("ws://www.example.com/socketserver", "protocolOne");

반환된 exampleSocket 오브젝트의 exampleSocket.readyState 값은 CONNECTING이다. readyState 값은 연결이 수립되어 데이터가 전송 가능한 상태가 되면 OPEN으로 변경된다.

만약 여러개의 프로토콜을 유연하게 대응할 수 있는 구조를 가지고 있다면, 연결 시에 배열을 통해 프로토콜의 목록을 지정할 수 있다.

    var exampleSocket = new WebSocket("ws://www.example.com/socketserver", ["protocolOne", "protocolTwo"]);

연결이 수립되면(readyState가 OPEN이 되었을 때), exampleSocket.protocol 값을 조사하여 서버가 어떤 프로토콜응ㄹ 선택했는지 알아낼 수 있습니다.

위의 예제에서 ws는 http를 대체. 비슷하게 was는 https를 대체한다. 웹소켓 연결을 http 업그레이드 메카니즘에 의해 수행되기 때문에 HTTP 서버 주소 지정에 대한 프로토콜 업그레이드 요청은 암시적이다.

### 서버에 데이터 전송하기

한번 연결이 수립되면 이제부터는 서버로 데이터를 전송할 수 있다. 이것을 하기 위해서는 단순히 WebSocket 오브젝트의 send()를 호출하여 보내고 싶은 메세지를 지정하기만 하면된다. 

    exampleSocket.send("블라브라블라블라");

연결을 맺는 것은 비동기작업이고 실패하기 쉬운 작업이기 때문에 WebSocket 오브젝트를 생성하자마자 send()로 데이터 전송을 시도하는 것은 성공하지 않을 가능성이 있다. 우리는 연결이 수립된 이후에만 데이터를 전송하기 위해 onopen 핸들러를 정의하고 이 위에서 작업한다.

### 데이터전송에 JSON 이용하기

Json을 이용하면 서버에 복잡한 데이터를 편리하게 보낼 수 있다. 예를 들어, 채팅 프로그램 서버와 JSON으로 캡슐화된 패킷 데이터를 주고 받는 프로토콜을 구현한것을 생각해볼수 있다.

    function sendText() {
        var msg = {
            type : "message",
            text: document.getElementById('text').value,
            id: clientId,
            date: Date.now()
        };

        exampleSocket.send(JSON.stringify(msg));

        docuemnt.getElementById('text').value = "";
    }

위에 코드는 코드를 json으로 바꿔서 보내고 비우는 건데. React에서는 text와 id를 state로 받아서 보내고 setState로 값을 비우면 똑같은 코드가 될 거같다.

### 서버로부터 데이터 수신하기

WebSockets는 event-driven API이다. 메시지가 수신되면 message 이벤트가 onmessage 함수로 전달되게 됩니다. 아래와 같은 코드를 작성하여 수신되는 데이터를 받아볼수 있다.

    exampleSocket.onmessage = function (event) {
        console.log(event.data);
    }

### 연결을 종료하기

exampleSocket.close();
