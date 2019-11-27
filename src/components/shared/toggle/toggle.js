import React, { Component } from 'react';
import './toggle.css';

const Toggle = (options) => {
  return (
    <div className="toggle">
      <p className="toggle__name">{options.options.toggleName}</p>
      <div className="toggle__item-list">
        {options.options.toggleItems.map((item) => (
          <p
            className={"toggle__item" + (item.selected ? ' selected' : '')}
            key={item.name}
          >{item.name}</p>
        )
        )}
      </div>
    </div>
  );
};

export default Toggle