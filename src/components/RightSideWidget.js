import React, { Component } from 'react';

class RightSideWidget extends Component {
  constructor() {
    super();
    this.state = {
      title: this.props.title
    }
  }

  render() {
    return (
      <div className='right-side-widget'>
        <h3>{this.state.title}</h3>
      </div>
    );
  }
}

export default RightSideWidget;
