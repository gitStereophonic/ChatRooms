import React, { Component } from 'react';

class NewRoomForm extends Component {
  constructor() {
    super();
    this.state = {
      roomName: ""
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.createNewRoom(this.state.roomName);
    this.setState({
      roomName: ""
    });
  }

  render() {
    return (
      <div className="new-room-form">
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="roomName"
            value={this.state.roomName}
            onChange={this.onChangeHandler}
            placeholder="NewRoomForm"
            required />
          <button id="create-room-btn" type="submit">+</button>
        </form>
      </div>
    );
  }
}

export default NewRoomForm;
