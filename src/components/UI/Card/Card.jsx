import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Card = ({ children }) => {
   return <div className={cx('card')}>{children}</div>;
};

export default Card;
