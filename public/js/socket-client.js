const lbOnline = document.getElementById("lbOnline");
const lbOffline = document.getElementById("lbOffline");
const txtMessage = document.getElementById("txtMessage");
const button = document.getElementById("button");

const socket = io();

socket.on("connect", () => {
    lbOffline.style.display = "none";
    lbOnline.style.display = "";
});

socket.on("disconnect", () => {
    lbOnline.style.display = "none";
    lbOffline.style.display = "";
});

socket.on("send-message", (payload) => {
    console.log(payload);
});

button.addEventListener("click", () => {
    const message = txtMessage.value;

    const payload = {
        message,
        id: "132abv",
        date: new Date().getTime(),
    };
    socket.emit("send-message", payload, (id) => {
        console.log("desde el server", id);
    });
});
