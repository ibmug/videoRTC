const socket = io("/");
const videoGrid = document.getElementById("video-grid");
//id, object with host and port
const myPeer = new Peer(undefined, {
	host: "/",
	port: "3002",
});

//For now, lets use this same script...
//fetch the video
const myVideo = document.createElement("video");
myVideo.muted = true;

//Lets grab our parties...
const peers = {};

//request access...
navigator.mediaDevices
	.getUserMedia({
		video: true,
		audio: true,
	})
	.then((stream) => {
		addVidStream(myVideo, stream);

		myPeer.on("call", (call) => {
			call.answer(stream);
			const video = document.createElement("video");

			call.on("stream", (userVideoStream) => {
				addVidStream(video, userVideoStream);
			});
		});

		socket.on("user-connected", (userId) => {
			connectToNewUser(userId, stream);
		});
	});

socket.on("user-disconnected", (userId) => {
	console.log("User disconnected.." + userId);
	if (peers[userId]) peers[userId].close();
});

//When we get an id and connect to mypeer server...
myPeer.on("open", (id) => {
	socket.emit("join-room", ROOM_ID, id);
});

function connectToNewUser(userId, stream) {
	const call = myPeer.call(userId, stream);
	const video = document.createElement("video");
	//lets add it to our document...
	call.on("stream", (userVideoStream) => {
		addVidStream(video, userVideoStream);
	});
	//Remove it when the connection is closed
	call.on("close", () => {
		video.remove();
	});
	peers[userId] = call;
}

// socket.on("user-connected", (userID) => {
// 	console.log("User Connected: " + userID);
// });

// var list_example = [1,2,3]
// var second_list = list_example

// print(list_example)
// list_example.append(4)
// print(second_list)
async function addVidStream(video, stream) {
	video.srcObject = stream;
	video.addEventListener("loadedmetadata", () => {
		video.play();
	});

	videoGrid.append(video);
}
