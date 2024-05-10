import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav className="bg-white flex justify-around p-8 mb-4 font-bold">
        <Link href={'/'}>Dashboard</Link>
        <Link href={'/pusher'}>Pusher Chat App</Link>
        <Link href={'/pubnub'}>PubNub Chat App</Link>
      </nav>
    </>
  );
}
