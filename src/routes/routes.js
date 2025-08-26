import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '~/components/Layouts/MainLayout/MainLayout';
import HeaderOnly from '~/components/Layouts/HeaderOnly/HeaderOnly';
import Home from '~/Pages/Home/Home';

import Explore from '~/Pages/Explore/Explore';

import CollectionProduct from '~/Pages/CollectionProduct/CollectionProduct';

export const routes = (
   <>
      <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />
         <Route path="collections/" element={<CollectionProduct />}>
            <Route index element={<CollectionProduct />} />
            <Route path=":category" element={<CollectionProduct />} />
         </Route>

         <Route path="explore" element={<Explore />} />
      </Route>

      <Route path="/control/" element={<HeaderOnly />}></Route>
   </>
);
