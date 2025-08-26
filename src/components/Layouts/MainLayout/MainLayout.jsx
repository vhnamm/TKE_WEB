import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/Header/Header';
import SideBar from '~/components/SideBar/SideBar.';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
const cx = classNames.bind(styles);

const MainLayout = () => {
   return (
      <div>
         <Header></Header>

         <Outlet />
      </div>
   );
};

export default MainLayout;
