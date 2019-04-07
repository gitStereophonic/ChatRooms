import React from 'react';

class RoomList extends React.Component {
  render() {
    const orderedRooms = [
      ...this.props.rooms.sort((left, right) => left.id > right.id)
    ];

    return (
      <div className="rooms-list">
        <ul>
          <h3>Your rooms:</h3>
          {orderedRooms.map(room => {
            return (
              <li key={room.id} className="room">
                <p
                  onClick={() => this.props.subscribeToRoom(room.id)}>
                  #{room.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RoomList;
