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

## Messaging app UI

### PubNub Version

![Realtime Chat App PubNub](/img/chat-app-pubnub-app.png 'Realtime Chat App PubNub')

### Pusher Version

![Realtime Chat App Pusher](/img/chat-app-pusher-app.png 'Realtime Chat App Pusher')
