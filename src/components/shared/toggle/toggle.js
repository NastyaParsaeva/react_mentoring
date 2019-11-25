import React from 'react';
import './toggle.css';

const Toggle = (options) => {
  return (
    <div className="toggle">
      <p className="toggle__name">{options.toggleName}</p>
      <div className="toggle__item-list">
        {(options.toggleItems && options.toggleItems.length) ? 
          options.toggleItems.map((item) => 
            <p className="toggle__item" key={item}>{item}</p>
          ) : 
          ''}
      </div>
    </div>
  );
};

export default Toggle;