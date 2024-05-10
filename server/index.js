const cors = require('cors');
const Pusher = require('pusher');
const express = require('express');
require('dotenv').config();
const crypto = require('crypto');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8000;

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const chatHistory = { messages: [] };

server.post('/message', (req, res) => {
  const { user = null, message = '', timestamp = +new Date() } = req.body;
  const chat = { user, message, timestamp };
  chatHistory.messages.push(chat);
  pusher.trigger('presence-chatroom', 'new-message', { chat });
  res.status(200).send('Message sent successfully.');
});

server.post('/messages', (req, res) => {
  res.json({ ...chatHistory, status: 'success' });
});

server.post('/auth', (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  console.log('Socket and channel', socketId, channel);
  const userId = crypto.randomBytes(8).toString('hex');

  const presenceData = {
    user_id: userId,
    user_info: {
      name: 'Anonymous User',
    },
  };

  const auth = pusher.authorizeChannel(socketId, channel, presenceData);
  res.send(auth);
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port: ${port} http://localhost:${port}`);
});
