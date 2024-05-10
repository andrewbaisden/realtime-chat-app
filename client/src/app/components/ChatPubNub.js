import { useState, useEffect, useRef } from 'react';
import PubNub from 'pubnub';
import ChatInterface from './ChatInterface';

export default function ChatPubNub({ activeUser }) {
  const [chats, setChats] = useState([]);
  const [count, setCount] = useState(1);
  const bottomRef = useRef(null);

  let pubnub;
  const channelName = 'presence-chatroom';

  useEffect(() => {
    pubnub = new PubNub({
      publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY,
      subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY,
      uuid: activeUser,
    });

    pubnub.addListener({
      message: (messageEvent) => {
        const chat = messageEvent.message;
        setChats((prevChats) => [...prevChats, chat]);
      },
    });

    const presenceChannelName = `${channelName}-pnpres`;

    pubnub.subscribe({
      channels: [channelName],
      withPresence: true,
      presenceChannels: [presenceChannelName],
    });

    const scrollToBottom = () => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    scrollToBottom();

    return () => {
      pubnub.unsubscribeAll();
    };
  }, [chats, activeUser, count]);

  const handleKeyUp = (evt) => {
    const value = evt.target.value;
    if (evt.keyCode === 13 && !evt.shiftKey) {
      const chat = { user: activeUser, message: value, timestamp: +new Date() };
      evt.target.value = '';
      pubnub.publish({
        channel: channelName,
        message: chat,
      });
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
