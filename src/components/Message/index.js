// Import npm
import React from 'react';

// Import component
import Repo from './Repo';

// Import data
import './style.scss';

// Component
const Message = () => (
  <div className="wrapper">
    <div className="repo">
      <Repo />
    </div>
  </div>
);

// Export
export default Message;
