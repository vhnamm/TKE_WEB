import React from 'react';
import Card from '~/components/UI/Card/Card';

import classNames from 'classnames/bind';
import styles from './HomeCollectionsBlock.module.scss';
import Button from '~/components/UI/Button/Button';
const cx = classNames.bind(styles);

const HomeCollectionsBlock = ({ products, collection }) => {
   return (
      <div className={cx('collection_wrap')}>
         <div className={cx('collection_banner')}>
            <img src={collection.image} alt="banner" />
            <h2 className={cx('collection_banner-title')}>{collection.description}</h2>
         </div>

         <div className={cx('grid', 'wide', 'collection_item_wrap')}>
            <div className={cx('row', 'item-row', 'small-gutter')}>
               {products.map((product) => {
                  return (
                     <div className={cx('col', 'lg-3', 'home-item')}>
                        <Card key={product.id} className={cx('item_in_col')}>
                           <div className={cx('collection_item-img')}>
                              <img src={product.images[0]} alt={product.name} />
                           </div>
                           <h4 className={cx('collection_item-price')}>{product.price}</h4>
                           <h4>{product.name}</h4>
                        </Card>
                     </div>
                  );
               })}
            </div>
         </div>

         <Button outline className={cx('more_btn')}>
            Xem tất cả
         </Button>
      </div>
   );
};

export default HomeCollectionsBlock;
