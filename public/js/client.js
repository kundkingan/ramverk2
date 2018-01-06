(() => {
  let websocket,
    // url         = 'ws://localhost:3000/',
    url         = 'ws://nodejs1.student.bth.se:8035/',
    userNick    = '',
    nick        = document.getElementById('nick'),
    connect     = document.getElementById('connect'),
    output      = document.getElementById('output'),
    send        = document.getElementById('send'),
    message     = document.getElementById('message');


  function outputLog(data) {
    let now = new Date();
    let timestamp = now.toLocaleTimeString();

    output.innerHTML += `${timestamp} ${data.nick}: ${data.message}<br>`;
    output.scrollTop = output.scrollHeight;
  }


  connect.addEventListener('click', () => {
    websocket = new WebSocket(url, 'json'), userNick = nick.value;

    websocket.onopen = () => {
      outputLog({nick: 'Server', message: 'Your are connected'});
    };

    websocket.onmessage = (event) => {
      outputLog(JSON.parse(event.data));
    };

    websocket.onclose = () => {
      outputLog('Websocket is now closed.');
    };
  });

  send.addEventListener('click', () => {
    let messageText = message.value;

    if (!websocket || websocket.readyState === 3) {
      console.log('The websocket is not connected to a server.');
    } else {
      websocket.send(JSON.stringify({nick: userNick, message: messageText}));
      outputLog({nick: userNick, message: messageText});
    }
  });
})();

