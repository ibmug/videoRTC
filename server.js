const express = require("express");
const { v4: uuidV4 } = require("uuid");

const app = express();
const apiPORT = process.env.apiPORT || 3001;
const serverPORT = process.env.webPort || 3003;
const server = require("http").Server(app);
const io = require("socket.io")(server);

//Define Mmiddleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));
//any static assets?
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

//app.use(routes) //if any routes needed for api

//Below should be the http routes...
app.get("/", (req, res) => {
	res.redirect(`/${uuidV4()}`);
});
app.get("/:room", (req, res) => {
	res.render("room", { roomID: req.params.room });
});

io.on("connection", async (socket) => {
	socket.on("join-room", (roomID, userID) => {
		console.log(roomID, userID);
		socket.join(roomID);
		//console.log(socket);
		try {
			socket.to(roomID).emit("user-connected", userID);
		} catch (err) {
			console.error(err);
		}

		socket.on("disconnect", () => {
			console.log("Room: " + roomID);
			console.log("User: " + userID);
			socket.to(roomID).emit("user-disconnected", userID);
		});
	});
});
//App API Layer
app.listen(apiPORT, function () {
	console.log(`API Server now listening on PORT ${apiPORT}`);
});

//HTTP Server
server.listen(serverPORT, function () {
	console.log(`HTTP Server running on ${serverPORT}`);
});
// const io = require("socket.io")(server);
