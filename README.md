# 🎥 Minimal WebRTC Video Chat

A simple peer-to-peer video calling app built with **Node.js**, **Express**, **WebSocket**, and **Simple-Peer** for direct browser-to-browser video communication. No database or frontend framework required — just pure WebRTC for learning or quick prototyping.

---

## Features

* One-on-one video chat via WebRTC
* Peer signaling using WebSocket (`ws`)
* Room-based connection using URL hash
* "End Call" button to stop the connection
* Minimal fullscreen UI with mirrored local video
* Lightweight setup with only Node.js

---

## Tech Stack

* **Backend:** Node.js, Express, WebSocket (`ws`)
* **Frontend:** HTML, CSS, JavaScript, Simple-Peer
* **Deployment:** Deployed on any Node.js hosting (e.g. Render)

---

## Getting Started

### Prerequisites

* Node.js (v14 or later recommended)
* npm (comes with Node.js)
* Git (for cloning repository)

---

### Installation

1. Clone the repository

```bash
git clone https://github.com/HSA-ATTOCK/minimal-webrtc.git
cd minimal-webrtc
```

2. Install dependencies

```bash
npm install
```

3. Run the application locally

```bash
npm start
```

4. Open first browser and navigate to

```bash
http://localhost:5000/#roomname-2
```

5. Open second browser and navigate to

```bash
http://localhost:5000/#roomname-1
```

Replace `roomname` with any unique name (e.g., `chat`, `demo`).

---

### Folder Structure

```
minimal-webrtc-video-chat/
├── public/             # Frontend file with inline script & styles
│   └── index.html
├── server.js           # Node.js WebSocket signaling server
├── package.json        # Project manifest
└── README.md           # This documentation file
```

---

## How It Works

* One peer joins with `#roomname-2` — becomes the **receiver**.
* Second peer joins with `#roomname-1` — becomes the **initiator**.
* Peers exchange signaling data via WebSocket.
* After signaling, media is streamed peer-to-peer using WebRTC.
* The "End Call" button stops media and closes the connection/tab.

---

## Deployment on Render.com

1. Push your project to GitHub.

2. Create a new Web Service on Render.com.

3. Connect your GitHub repository.

4. Set the following in Render’s deployment settings:

   * **Build Command:** `npm install`
   * **Start Command:** `node server.js`

5. Deploy and access your app at the provided Render URL.

---

## Configuration

* The server listens on the port specified by environment variable `PORT`, or defaults to `5000`.
* No session or database configuration is required.

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## Contact

Created by HSA-ATTOCK.
Feel free to reach out for any questions or collaboration.
