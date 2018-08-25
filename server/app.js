var express = require('express')
	, http = require('http')
	, path = require('path');

var app = express();
var server = http.createServer(app);
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ server: server });
var colors = ['red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange'];
colors.sort(function(a, b) {
	return Math.random() > 0.5;
});
var clients = [];
var clientsList = [];

wss.on('connection', function(ws) {
	var userName = false;
	var userColor = false;

    clients.push(Object.assign(ws, { userID: Date.now() }));

	ws.on('message', function(msg) {
		if (!userName) {
			userName = msg;
			userColor = colors.shift();

            clientsList.push({ id: ws.userID, userName: userName });

            ws.send(JSON.stringify({type: 'send_clients', clientsList: clientsList, userName: userName}));

			for (var i = 0; i < clients.length -1; i++) {
				clients[i].send(JSON.stringify({ type: 'connected_new_user', userID: ws.userID, userName}   ));
			}

			console.log(userName + ' login');
			console.log(clientsList);

		} else {
			console.log(userName + ' say: ' + msg);
			var obj = {
				time: (new Date()).getTime(),
				text: msg,
				author: userName,
				color: userColor
			};
			var json = JSON.stringify({ type: 'message', data: obj });
			for (var i = 0; i < clients.length; i++) {
				clients[i].send(json);
			}
		}
	});
	ws.on('close', function() {
		var index = clients.indexOf(ws);

		clients.splice(index, 1);
		if (userName !== false && userColor != false) {
			colors.push(userColor);
		}
        clientsList.splice(index, 1);

		var json = JSON.stringify({ type: 'disconnected_user', userID: ws.userID });
		for (var i = 0; i < clients.length; i++) {
			clients[i].send(json);
		}

	});

});

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});

app.get('/', function(req, res) {
	res.sendfile('views/chat.html');
});

server.listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
