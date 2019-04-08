import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

class MessageList extends Component {
  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);

    this.shouldScroll
      = node.scrollTop        // height to top from screen
      + node.clientHeight     // height of the screen at component
      + 100                   // some extra buffer
      >= node.scrollHeight;   // height of entire component
  }

  componentDidUpdate() {
    if (this.shouldScroll) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    if (!this.props.currentRoomId)
      return (
        <div className="message-list">
          <div className="join-room">
            &larr; Join a room to start messaging.
          </div>
        </div>
      );
    else
      return (
        <div className="message-list">
          {this.props.messages.map((message, index) => {
            return (
              <Message
                key={index}
                username={message.senderId}
                message={message.parts[0].payload.content}
              />
            );
          })}
        </div>
      );
  }
}

export default MessageList;
