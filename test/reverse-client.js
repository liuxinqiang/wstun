var wstun = require("../index.js");

reverse_client = new wstun.client_reverse();

// without security
wstunHost = 'ws://localhost:6900';

// // or with security
// wstunHost = 'wss://wstunServerIP:wstunPort';

// <publicPort> is the port on the reverse tunnel server on which the tunneled service will be reachable
// <remoteHost>:<remotePort> is the endpoint of the service to be reverse tunneled
reverse_client.start(6001,  wstunHost, '127.0.0.1:8000');
