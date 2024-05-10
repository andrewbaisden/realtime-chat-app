'use client';
import DashboardButton from './components/DashboardButton';

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="mb-4 text-white text-4xl">Choose a messaging app</h1>
          <div className="grid gap-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <DashboardButton
              url={'/pusher'}
              img={
                'https://res.cloudinary.com/d74fh3kw/image/upload/v1715187329/pusher-logo_u0gljx.svg'
              }
              alt="Pusher Logo"
            />
            <DashboardButton
              url={'/pubnub'}
              img={
                'https://res.cloudinary.com/d74fh3kw/image/upload/v1715189173/pubnub-logo-vector_olhbio.png'
              }
              alt="PubNub Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
