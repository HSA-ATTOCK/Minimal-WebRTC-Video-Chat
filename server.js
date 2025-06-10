const express = require("express");
const http = require("http");
const path = require("path");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);

// Serve static files (e.g., index.html)
app.use(express.static(path.join(__dirname, "public")));

// Favicon fix (optional)
app.get("/favicon.ico", (req, res) => res.status(204));

const wss = new WebSocket.Server({ noServer: true });

server.on("upgrade", (req, socket, head) => {
  const pathname = req.url;

  if (pathname.startsWith("/ws/")) {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
    });
  } else {
    socket.destroy();
  }
});

wss.on("connection", (ws, req) => {
  const room = req.url.split("/").pop() || "default";
  ws.room = room;
  console.log(`New connection in room: ${room}`);

  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (
        client !== ws &&
        client.readyState === WebSocket.OPEN &&
        client.room === room
      ) {
        client.send(message.toString());
      }
    });
  });

  ws.on("close", () => {
    console.log(`Connection closed in room: ${room}`);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
