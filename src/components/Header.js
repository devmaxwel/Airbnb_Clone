import React from 'react'
import './header.css';
import SearchIcon from "@mui/icons-material/Search";
import { ExpandMoreOutlined } from '@mui/icons-material';
import { Avatar } from '@material-ui/core';
import { LanguageOutlined } from '@material-ui/icons';

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://colorpedia.org/wp-content/uploads/2021/09/airbnb-logo.png"
        alt="logo"
        className="header_icon"
      />
      <div className='header_center'>
          <input type='text' />
          <SearchIcon />
      </div>
      <div className='header_right'>
          <p>Become a Host</p>
          <LanguageOutlined />
          <ExpandMoreOutlined />
          <Avatar />
          </div>
    </div>
  );
}

export default Header;