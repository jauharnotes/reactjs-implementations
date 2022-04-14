import React, { Component } from 'react';

export default class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonSwich: false,
    };
  }

  handleButton() {
    this.setState((prevButton) => ({ buttonSwich: !prevButton.buttonSwich }));
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleButton()}>
          {this.state.buttonSwich ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
