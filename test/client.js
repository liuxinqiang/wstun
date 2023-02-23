var wstun = require("../index.js");

client = new wstun.client();

// without security
wstunHost = 'ws://localhost:8900';

// // or with security
// wstunHost = 'wss://wstunServerIP:wstunPort';

// <localPort> is the port on the localhost on which the tunneled service will be reachable
// <remoteHost>:<remotePort> is the endpoint of the service to be tunneled
client.start(9001, wstunHost, '127.0.0.1:8000');
