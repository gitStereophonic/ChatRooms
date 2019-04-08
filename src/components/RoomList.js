import React from 'react';

class RoomList extends React.Component {
  render() {
    const orderedRooms = [
      ...this.props.rooms.sort((left, right) => left.id > right.id)
    ];

    return (
      <div className="rooms-list">
        <h3>Rooms:</h3>
        <ul>
          {orderedRooms.map(room => {
            const active = this.props.currentRoomId === room.id ? "active" : "";
            return (
              <li key={room.id} className={"room " + active}>
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
