const wstun = require("../index.js");

// without security
reverse_server = new wstun.server_reverse();
//
// // or with security (<PRIVATE-KEY-PATH> and <PUBLIC-KEY-PATH> are the paths of the private and public keys in .pem formats)
// reverse_server = new wstun.server_reverse({ssl:true, key:"<PRIVATE-KEY-PATH>", cert:"<PUBLIC-KEY-PATH>"});

//start the server (<PORT> is the listening port)
reverse_server.start(5900);
