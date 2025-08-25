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
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/1126c7ba93d2b2517b0944bc4111f460~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=26540b1c&x-expires=1755010800&x-signature=br10Hj9R3TPOtPGXBu4XtCcpXfM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
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
