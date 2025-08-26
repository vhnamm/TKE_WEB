import React from 'react';
import Card from '~/components/UI/Card/Card';
import classNames from 'classnames/bind';
import styles from './HomeProducts.module.scss';
import Button from '~/components/UI/Button/Button';
const cx = classNames.bind(styles);
const HomeProducts = () => {
   return (
      <div className={cx('best_seller-wrap')}>
         <div className={cx('banner_best_seller')}>
            <img src="https://pos.nvncdn.com/4ef0bf-108661/bn/20250703_GAbfIbwG.gif?v=1751534231" alt="best seller" />
            <h2 className={cx('best_sell-title')}>Bộ sưu tập được yêu thích nhất</h2>
         </div>

         <div className={cx('grid', 'wide', 'best_sell_item_wrap')}>
            <div className={cx('row', 'item-row')}>
               <div className={cx('col', 'lg-2-4', 'home-item')}>
                  <Card>
                     <div className={cx('best_sell_item-img')}>
                        <img
                           src="https://buggy.yodycdn.com/images/product/297e0ebef50ff9f504db1865565c8768.webp?width=431&height=575"
                           alt=""
                        />
                     </div>
                     <h4 className={cx('best_sell_item-price')}>549.000d</h4>
                     <h4>Áo sơ mi tay dài túi kiểu</h4>
                  </Card>
               </div>

               <div className={cx('col', 'lg-2-4', 'home-item')}>
                  <Card>
                     <div className={cx('best_sell_item-img')}>
                        <img
                           src="https://buggy.yodycdn.com/images/product/297e0ebef50ff9f504db1865565c8768.webp?width=431&height=575"
                           alt=""
                        />
                     </div>
                     <h4 className={cx('best_sell_item-price')}>549.000d</h4>
                     <h4>Áo sơ mi tay dài túi kiểu</h4>
                  </Card>
               </div>

               <div className={cx('col', 'lg-2-4', 'home-item')}>
                  <Card>
                     <div className={cx('best_sell_item-img')}>
                        <img
                           src="https://buggy.yodycdn.com/images/product/297e0ebef50ff9f504db1865565c8768.webp?width=431&height=575"
                           alt=""
                        />
                     </div>
                     <h4 className={cx('best_sell_item-price')}>549.000d</h4>
                     <h4>Áo sơ mi tay dài túi kiểu</h4>
                  </Card>
               </div>

               <div className={cx('col', 'lg-2-4', 'home-item')}>
                  <Card>
                     <div className={cx('best_sell_item-img')}>
                        <img
                           src="https://buggy.yodycdn.com/images/product/297e0ebef50ff9f504db1865565c8768.webp?width=431&height=575"
                           alt=""
                        />
                     </div>
                     <h4 className={cx('best_sell_item-price')}>549.000d</h4>
                     <h4>Áo sơ mi tay dài túi kiểu</h4>
                  </Card>
               </div>

               <div className={cx('col', 'lg-2-4', 'home-item')}>
                  <Card>
                     <div className={cx('best_sell_item-img')}>
                        <img
                           src="https://buggy.yodycdn.com/images/product/297e0ebef50ff9f504db1865565c8768.webp?width=431&height=575"
                           alt=""
                        />
                     </div>
                     <h4 className={cx('best_sell_item-price')}>549.000d</h4>
                     <h4>Áo sơ mi tay dài túi kiểu</h4>
                  </Card>
               </div>

               <div className={cx('col', 'lg-2-4', 'home-item')}>
                  <Card>
                     <div className={cx('best_sell_item-img')}>
                        <img
                           src="https://buggy.yodycdn.com/images/product/297e0ebef50ff9f504db1865565c8768.webp?width=431&height=575"
                           alt=""
                        />
                     </div>
                     <h4 className={cx('best_sell_item-price')}>549.000d</h4>
                     <h4>Áo sơ mi tay dài túi kiểu</h4>
                  </Card>
               </div>
            </div>
         </div>

         <Button outline className={cx('more_btn')}>
            Xem tất cả
         </Button>
      </div>
   );
};

export default HomeProducts;
