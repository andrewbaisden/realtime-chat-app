import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatInterface from './ChatInterface';

export default function ChatPusher({ activeUser }) {
  const [chats, setChats] = useState([]);
  const [count, setCount] = useState(0);
  const bottomRef = useRef(null);

  let channel;
  let pusher;

  useEffect(() => {
    pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
      useTLS: true,
      channelAuthorization: {
        endpoint: 'http://localhost:8000/auth',
      },
    });

    channel = pusher.subscribe('presence-chatroom');
    channel.bind('new-message', ({ chat = null }) => {
      if (chat) {
        setChats((prevChats) => [...prevChats, chat]);
      }
    });

    channel.bind('pusher:subscription_succeeded', () => {
      updateMemberCount(channel);
    });

    channel.bind('pusher:member_added', () => {
      updateMemberCount(channel);
    });

    channel.bind('pusher:member_removed', () => {
      updateMemberCount(channel);
    });

    const scrollToBottom = () => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    scrollToBottom();

    return () => {
      pusher.disconnect();
    };
  }, [chats]);

  const updateMemberCount = (presenceChannel) => {
    const memberCount = Object.keys(presenceChannel.members.members).length;
    console.log('Count people online', memberCount);
    setCount(memberCount);
  };

  const handleKeyUp = (evt) => {
    const value = evt.target.value;
    if (evt.keyCode === 13 && !evt.shiftKey) {
      const chat = { user: activeUser, message: value, timestamp: +new Date() };
      evt.target.value = '';
      axios.post('http://localhost:8000/message', chat);
    }
  };

  return activeUser ? (
    <>
      <ChatInterface
        activeUser={activeUser}
        count={count}
        chats={chats}
        handleKeyUp={handleKeyUp}
        bottomRef={bottomRef}
      />
    </>
  ) : null;
}
