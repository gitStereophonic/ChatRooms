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
      < h3 > {props.title}</h3 >
      <div className='widget-body'>
        <input type='checkbox'></input>
      </div>
    </div>
  );
}

export default RightSideWidget;
