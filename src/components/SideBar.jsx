import React from 'react';
import NavBar from './NavBar';
import Search from './Search';

const SideBar = ({ users }) => {
  return (
    <div className="sidebar">
      <NavBar />
      <Search />
    </div>
  );
};

export default SideBar;
