import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Card = ({ className, key, children }) => {
   const classes = cx('card', className);
   return (
      <div key={key} className={classes}>
         {children}
      </div>
   );
};

export default Card;
