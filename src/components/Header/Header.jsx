import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Button from '../UI/Button/Button';
import PopperContainer from '../UI/Popper/PopperContainer';
import AccountItem from '~/components/AccountItem/AccountItem';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets';
const cx = classNames.bind(styles);

const Header = () => {
   // kết quả tìm kieemms khi call api:
   const [searchResult, setSearchResult] = useState([1]);

   return (
      <header className={cx('wrapper')}>
         <div className={cx('header_wrap', 'grid', 'wide')}>
            <div className={cx('logo')}>
               <img src={images.darkLogo.default} alt="" />
            </div>
            {/* mặc định khi hover vào cái tippy bọc thì auto hiện popper, muốn custom theo ý mình thì phải có thêm props visible={your_react_state} 
               và mặc định trong tipy sẽ ko tương tác được, phải thêm props interactive = {true}
            */}
            <Tippy
               interactive={true}
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search_result_popper')} tabIndex="-1" {...attrs}>
                     {/* render popper custom here */}
                     <PopperContainer>
                        <h4 className={cx('search_result-category')}>Accounts</h4>
                        <ul className={cx('account_list')}>
                           <AccountItem />
                           <AccountItem />
                           <AccountItem />
                           <AccountItem />
                        </ul>
                     </PopperContainer>
                  </div>
               )}
            >
               <div className={cx('search_wrapper')}>
                  <input type="text" placeholder="Search for video and accounts" spellCheck={false} />
                  <Button className={cx('clear-btn')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </Button>
                  <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />

                  <Button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
               </div>
            </Tippy>

            <div className={cx('header_actions')}></div>
         </div>
      </header>
   );
};

export default Header;
