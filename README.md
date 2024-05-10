# Realtime Chat App

![Realtime Chat App](/img/realtime-chat-app.png 'Realtime Chat App')

## Prerequisites

1. Create an account on [PubNub](https://www.pubnub.com/)
   and an account on [Pusher](https://pusher.com/)
2. Create an `.env.local` file and put it in the root of the client folder
3. Create an `.env` file and put it in the root of the server folder
4. Create apps on PubNub and Pusher if you have not done so already, then locate your API keys on both platforms, before adding them to the environment files. Make sure that Presence and Persistence are enabled for your PubNub app

See these examples:

This is the `.env.local` file in the client folder:

```shell
NEXT_PUBLIC_PUBNUB_PUBLISH_KEY=your-publish-key
NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY=your-subscribe-key
NEXT_PUBLIC_PUSHER_APP_ID=your-app-id
NEXT_PUBLIC_PUSHER_APP_KEY=your-app-key
NEXT_PUBLIC_PUSHER_APP_SECRET=your-app-secret
NEXT_PUBLIC_PUSHER_APP_CLUSTER=your-cluster
```

This is the `.env` file in the server folder:

```shell
PUSHER_APP_ID=your-app-id
PUSHER_APP_KEY=your-app-key
PUSHER_APP_SECRET=your-app-secret
PUSHER_APP_CLUSTER=your-cluster
```

## Project setup

First install the dependencies in the client and server folders:

```bash
npm install
```

Next, run both of the servers:

Client:

```bash
npm run dev
```

Server:

```bash
npm run start
```

## How to use the messaging apps

There are two messaging apps one using the PubNub API and the other using the Pusher API.

The PubNub version has a blue header and the Pusher version has a green header. They can't communicate with each other you can only have multiple conversations within that application, like using WhatsApp or Telegram.

Sign in with any name and open multiple windows or tabs to sign in as different users. Now you can have a real-time conversation simulating other users or with real people if you deploy it online but beware it's not production-ready, it's just a demo proof of concept.

### PubNub Version

![Realtime Chat App PubNub](/img/chat-app-pubnub-app.png 'Realtime Chat App PubNub')

### Pusher Version

![Realtime Chat App Pusher](/img/chat-app-pusher-app.png 'Realtime Chat App Pusher')
