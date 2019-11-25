import React, { Component } from 'react';
import './toggle.css';

class Toggle extends Component {
  render() {
    return (
      <div className="toggle">
        <p className="toggle__name">{this.props.options.toggleName}</p>
        <div className="toggle__item-list">
          {this.props.options.toggleItems.map((item) => 
            <p className="toggle__item" key={item}>{item}</p>
          )}
        </div>
      </div>
    )
  }
}

export default Toggle