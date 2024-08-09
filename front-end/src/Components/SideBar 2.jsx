import React from 'react';
import "./SideBar.css";
import { Link } from 'react-router-dom';

const sideBarData = [
  {
    id: 1,
    name: "Home",
    path: "/",
    imgUrl: "/ion_home.png"
  },
  {
    id: 2,
    name: "Rooms",
    path: "/rooms",
    imgUrl: "/Vector.png"
  },
  {
    id: 3,
    name: "Channels",
    path: "/channels",
    imgUrl: "/Ellipse 12.png"
  },
];

const SideBar = () => {
  return (
    <div className="sidebar">
      {sideBarData.map((item) => (
        <Link to={item.path} key={item.id} className="sidebar-item">
          <img src={item.imgUrl} alt={item.name} className="sidebar-icon" />
          <span className="sidebar-name">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;