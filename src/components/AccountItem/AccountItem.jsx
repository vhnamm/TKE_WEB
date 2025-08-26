import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const AccountItem = () => {
   return (
      <li className={cx('account_item')}>
         <img
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/369076395_1454476938668898_2840145980371506315_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=W-ON7D4X1TcQ7kNvwHEr-bV&_nc_oc=AdnnI7dZk4C5qULfVTMT5TH5fvQLZ7cZ6dZa8PFWA3sJHrhjxSxV-GmXVzaQ0VEdHDE&_nc_zt=24&_nc_ht=scontent.fhan14-3.fna&_nc_gid=8lKYjgLhi9NPMbHt1FXEvw&oh=00_AfUmnQNzh5ntONTLDSEnwzIuB3tqnkGSlJbzU6QiYoY0xQ&oe=68B24A02"
            alt=""
         />
         <div className={cx('info')}>
            <h4 className={cx('userid')}>
               <span>lavie_1001</span>
               <FontAwesomeIcon className={cx('verify_icon')} icon={faCircleCheck} />
            </h4>
            <span className={cx('username')}>hoainam10012005</span>
         </div>
      </li>
   );
};

export default AccountItem;
