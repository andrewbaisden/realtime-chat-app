import ChatMessage from './ChatMessage';

export default function ChatInterface({
  activeUser,
  count,
  chats,
  handleKeyUp,
  bottomRef,
}) {
  return (
    <div className="flex">
      <aside className="w-64 min-w-64 bg-slate-800 p-2">
        <h1 className="text-lg text-white">Chats</h1>
        <div className="flex justify-between mt-2">
          <div className="flex">
            <div className="rounded-full bg-slate-100 h-10 w-10 mr-2"></div>
            <div className="text-sm">
              <p className="text-white">John</p>
              <p className="text-slate-400">Hello world</p>
            </div>
          </div>
          <div className="text-sm text-slate-400">Friday</div>
        </div>
      </aside>
      <section className="grow">
        <div className="bg-zinc-800 p-2">
          <div className="flex">
            <div className="rounded-full bg-slate-100 h-10 w-10 mr-2"></div>
            <div>
              <h1 className="text-2xl text-white">{activeUser}</h1>
              <span className="text-gray-300">users online: {count}</span>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 p-2 overflow-y-auto h-80 max-h-80 text-white">
          {chats.map((chat, index) => {
            const previous = Math.max(0, index - 1);
            const previousChat = chats[previous];
            const position = chat.user === activeUser ? 'right' : 'left';
            const isFirst = previous === index;
            const inSequence = chat.user === previousChat.user;
            const hasDelay =
              Math.ceil(
                (chat.timestamp - previousChat.timestamp) / (1000 * 60)
              ) > 1;
            return (
              <div key={index}>
                {(isFirst || !inSequence || hasDelay) && (
                  <div>
                    <span>{chat.user || 'Anonymous'}</span>
                  </div>
                )}
                <ChatMessage message={chat.message} position={position} />
              </div>
            );
          })}
          <div ref={bottomRef} />{' '}
        </div>
        <div className="w-full bg-zinc-800 p-2">
          <textarea
            onKeyUp={handleKeyUp}
            placeholder="Enter a message"
            className="w-full block rounded mt-2 mb-2 p-2 text-white bg-zinc-600"
          ></textarea>
        </div>
      </section>
    </div>
  );
}
