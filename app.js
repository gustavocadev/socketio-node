const MyServer = require("./models/server");
require("dotenv").config();

const server = new MyServer();

server.listen();
