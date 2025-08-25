import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
const cx = classNames.bind(styles);

const SideBar = () => {
   return <aside className={cx('col lg-2')}>this is side bar</aside>;
};

export default SideBar;
