import React from 'react';

function RightSideWidget(props) {
  return (
    <div className={'right-side-widget ' + props.mode}>
      <div className='widget-title'>
        <h4>{props.title}</h4>
        <p>Set up chat room</p>
      </div>
      <div className='widget-body'>
        <input id='settOn' type='checkbox'></input>
        <label for='settOn'>Wanna some settings, man? </label>
      </div>
    </div>
  );
}

export default RightSideWidget;
