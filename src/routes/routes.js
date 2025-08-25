import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '~/components/Layouts/MainLayout/MainLayout';
import HeaderOnly from '~/components/Layouts/HeaderOnly/HeaderOnly';
import Home from '~/Pages/Home/Home';
import Following from '~/Pages/Following/Following';
import Explore from '~/Pages/Explore/Explore';
import Friends from '~/Pages/Friends/Friends';
import Upload from '~/Pages/Upload/Upload';

export const routes = (
   <>
      <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />
         <Route path="following" element={<Following />} />
         <Route path="explore" element={<Explore />} />
         <Route path="friends" element={<Friends />} />
      </Route>

      <Route path="/control/" element={<HeaderOnly />}>
         <Route path="upload" element={<Upload />} />
      </Route>
   </>
);
