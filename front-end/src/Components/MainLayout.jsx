import React from 'react';
import SideBar from './SideBar';
import './MainLayout.css';
import TopNav from './TopNav';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <SideBar />
      <div className="main-content">
        <div className="content-wrapper">
          <TopNav />
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;