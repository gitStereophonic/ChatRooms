import React from 'react';

function RoomTitle(props) {
  if (!props.roomId)
    return (
      <div className="room-title"></div>
    );

  const members =
    props.memCount === 1 ? " member" : " members";

  return (
    <div className="room-title" onClick={props.onClickHandler}>
      <h4>
        {props.roomName}
      </h4>
      <p>
        {props.memCount} {members}
      </p>
    </div>
  );
}

export default RoomTitle;
