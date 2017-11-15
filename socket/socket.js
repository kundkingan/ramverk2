'use strict';

const webSocket = require('ws');

module.exports = (server) => {
	const wss = new webSocket.Server({
		server: server, 
		clientTracking: true,
		handleProtocols: (protocol) => {return 'json'}
	});

	let sendToAll = (ws, data) => {
		wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === webSocket.OPEN) client.send(data);
    });
	}

	wss.on('connection', (ws) => {
		console.log('Connection received: ' + wss.clients.size)

	  ws.on('message', (data) => {
	  	sendToAll(ws, data);
	  });

	  ws.on('close', (code, reason) => {
      console.log(`Closing connection: ${code} ${reason}`);
      sendToAll({nick: 'Server', message: 'Someone disconnected ' + wss.clients.size})
    });
	});

	return wss;
};
