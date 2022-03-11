This is a simple application that communicates between two clients using socket.io

1.Socket io handles the connections in the server being listened.
2.PeersJS handles the peer connections and create userIds.
3.listeners handle connection/disconnection and answering between clients.
4.Only two files exist, server.js and script.js
This particular application is handled by ejs
through:
app.set("view engine", "ejs");
Note that the html is under 'views' as room.ejs, just like a handlebar.
