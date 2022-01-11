const sockerController = (socket) => {
    console.log("cliente connectado", socket.id);

    socket.on("disconnect", () => {
        console.log("cliente desconectado", socket.id);
    });

    socket.on("send-message", (payload, callback) => {
        const id = 12345689;
        callback(id);
        socket.broadcast.emit("send-message", payload);
    });
};

module.exports = {
    sockerController,
};
