import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCircleXmark, faMagnifyingGlass, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '../UI/Button/Button';
import PopperContainer from '../UI/Popper/PopperContainer';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const Header = () => {
   // kết quả tìm kieemms khi call api:
   //const [searchResult, setSearchResult] = useState([1]);

   return (
      <header className={cx('wrapper')}>
         <div className={cx('header_wrap', 'grid', 'wide')}>
            <div className={cx('logo')}>
               <h2>Augustine</h2>
            </div>

            <div className={cx('category_wrap')}>
               <h3>
                  <Link className={cx('link')} to="/collections">
                     Sản phẩm mới
                  </Link>
               </h3>
               <h3>
                  <Link className={cx('link')} to="/collections/do-nam">
                     Đồ nam
                  </Link>
               </h3>

               <h3>
                  <Link className={cx('link')} to="/collections/do-nu">
                     Đồ nữ
                  </Link>
               </h3>

               <div className={cx('search_wrapper')}>
                  <input type="text" placeholder="Tìm kiếm sản phẩm..." spellCheck={false} />
                  <Button className={cx('clear-btn')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </Button>
                  <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />

                  <Button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
               </div>
            </div>

            <div className={cx('header_actions')}>
               <div>
                  <FontAwesomeIcon className={cx('user-icon')} icon={faUser} />
               </div>
               <div>
                  <FontAwesomeIcon className={cx('cart-icon')} icon={faBagShopping} />
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
