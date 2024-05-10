import { useState } from 'react';
import ChatPubNub from '../components/ChatPubNub';
import ChatPusher from '../components/ChatPusher';

export default function UserLogin({ bgColor, appName }) {
  const [user, setUser] = useState(null);

  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      const newUser = evt.target.value;
      setUser(newUser);
    }
  };
  return (
    <>
      <main>
        <div>
          <section>
            <div className={`p-4 ${bgColor} text-slate-100`}>
              <span>
                {user ? (
                  <span className="flex justify-between text-white">
                    <span>
                      {user} <span>is online</span>
                    </span>
                    <span>{appName}</span>
                  </span>
                ) : (
                  <span className="text-2xl text-white">
                    What is your name?
                  </span>
                )}
              </span>
              {!user && (
                <input
                  type="text"
                  onKeyUp={handleKeyUp}
                  autoComplete="off"
                  className="w-full block rounded mt-2 mb-2 p-2 text-black"
                />
              )}
            </div>
          </section>
          {appName === 'PubNub Chat' ? (
            <section>{user && <ChatPubNub activeUser={user} />}</section>
          ) : (
            <section>{user && <ChatPusher activeUser={user} />}</section>
          )}
        </div>
      </main>
    </>
  );
}
