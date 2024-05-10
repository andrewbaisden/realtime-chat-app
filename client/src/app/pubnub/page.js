'use client';
import Header from '../components/Header';
import UserLogin from '../components/UserLogin';

export default function PubNub() {
  return (
    <div>
      <Header />
      <UserLogin bgColor={'bg-sky-800'} appName={'PubNub Chat'} />
    </div>
  );
}
