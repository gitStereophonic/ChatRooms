import React from 'react';

class SendMessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      messageText: ""
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    const { value } = event.target;
    this.setState({
      messageText: value
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    // send off the message here
    this.props.sendMessage(this.state.messageText);
    this.setState({
      messageText: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="send-message-form">
        <input
          disabled={this.props.disabled}
          placeholder="Type your message"
          type="text"
          value={this.state.messageText}
          onChange={this.onChangeHandler}
        />
      </form>
    );
  }
}

export default SendMessageForm;
