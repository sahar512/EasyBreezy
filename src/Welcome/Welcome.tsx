import React from 'react';
import ReactDOM from 'react-dom';
import classes from './style.css';

function Welcome() {
  return (
    <div className={classes['page-container']}>
      <div className={classes['welcome-container']}>
        <div className={classes['easy-text']}>
          EASY
        </div>
        
        <div className={classes['breezy-text']}>
          BREEZY
        </div>
      </div>
    </div>
  );
}

export default Welcome;
