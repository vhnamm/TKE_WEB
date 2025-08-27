import React, { useEffect, useState } from 'react';
import Card from '~/components/UI/Card/Card';
import classNames from 'classnames/bind';
import styles from './HomeProducts.module.scss';
import Button from '~/components/UI/Button/Button';
import HomeCollectionsBlock from '../HomeCollectionsBlock/HomeCollectionsBlock';
const cx = classNames.bind(styles);

const HomeProducts = () => {
   const [products, setProducts] = useState([]);
   const [collections, setCollections] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const rawRes = await fetch('http://localhost:3001/products');
            const res = await rawRes.json();

            setProducts(res);
         } catch (err) {
            throw new Error('err:', err);
         }
      };

      fetchProducts();
   }, []);

   useEffect(() => {
      const fetchCollection = async () => {
         try {
            const rawRes = await fetch('http://localhost:3001/collections');
            const res = await rawRes.json();
            setCollections(res);
         } catch (err) {
            throw new Error(err);
         }
      };

      fetchCollection();
   }, []);

   return (
      <>
         {collections.map((collection) => {
            const productsWithCollection = products.filter((product) => {
               return collection.productIds.includes(product.id);
            });
            console.log(productsWithCollection);
            return <HomeCollectionsBlock products={productsWithCollection} collection={collection} />;
         })}
      </>
   );
};

export default HomeProducts;
