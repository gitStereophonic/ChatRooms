import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';

import { tokenUrl, instanceLocator } from './config';

class App extends React.Component {
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'raccoon_developer',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect()
      .then(currentUser => {
        console.log(currentUser.rooms);
        currentUser.subscribeToRoomMultipart({
          roomId: '20147461',
          messageLimit: 30,
          hooks: {
            onMessage: message => {
              console.log("message text: ", message.parts[0].payload.content);
            }
          }
        });
      });
  }

  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
