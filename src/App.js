import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';

import { tokenUrl, instanceLocator } from './config';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

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
        this.currentUser = currentUser;

        this.currentUser.getJoinableRooms()
          .then(joinableRooms => {
            this.setState({
              joinableRooms,
              joinedRooms: this.currentUser.rooms
            });
          })
          .catch(err => console.log("Error at fetching rooms: ", err));

        this.currentUser.subscribeToRoomMultipart({
          roomId: '20147461',
          messageLimit: 30,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              });
            }
          }
        });
      })
      .catch(err => console.log("Connection error: ", err));
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: '20147461'
    });
  }

  render() {
    return (
      <div className="app">
        <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
