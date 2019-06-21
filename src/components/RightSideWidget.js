import React from 'react';

function RightSideWidget(props) {
  return (
    <div className=
      {
        'right-side-widget ' +
        (
          props.isActive
            ? 'right-side-widget-active'
            : 'right-side-widget-non-active'
        )
      }
    >
      <div className='widget-title'>
        <h4>{props.title}</h4>
        <p>Set up chat room</p>
      </div>
      <div className='widget-body'>
        <input type='checkbox'> Wanna some settings, man? </input>
      </div>
    </div>
  );
}

export default RightSideWidget;
