var wstun = require("../index.js");

// without security
server = new wstun.server();

// or with security (<PRIVATE-KEY-PATH> and <PUBLIC-KEY-PATH> are the paths of the private and public keys in .pem formats)
// server = new wstun.server({ssl:true, key:"<PRIVATE-KEY-PATH>", cert:"<PUBLIC-KEY-PATH>"});

//start the server (<PORT> is the listening port)
server.start(8900)
