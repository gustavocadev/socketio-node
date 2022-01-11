const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const { createServer } = require("http");
const { sockerController } = require("../sockets/controller");

class MyServer {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app);
        this.io = new Server(this.server);

        this.paths = {};

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Directorio Público
        this.app.use(express.static("public"));
    }

    routes() {
        // this.app.use(this.paths.auth, require("../routes/auth"));
    }

    sockets() {
        this.io.on("connection", sockerController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port);
        });
    }
}

module.exports = MyServer;
