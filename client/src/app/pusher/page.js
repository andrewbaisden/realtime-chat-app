'use client';
import Header from '../components/Header';
import UserLogin from '../components/UserLogin';

export default function Pusher() {
  return (
    <div>
      <Header />
      <UserLogin bgColor={'bg-emerald-800 '} appName={'Pusher Chat'} />
    </div>
  );
}
