import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
const Home = () => {
   return (
      <div className={cx('col lg-10')}>
         <div className={cx('home_wrapper')}>
            <h2>HOme page</h2>
         </div>
      </div>
   );
};

export default Home;
