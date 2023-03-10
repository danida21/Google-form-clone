import React from 'react'
import './Header.css'
import {Menu, Search, Apps} from '@mui/icons-material';
import { IconButton, Avatar } from '@mui/material';
import formlogo from '../../assets/logo.png'
import TemporaryDrawer from '../drawer/TemporaryDrawer';

const Header = () => {
  return (
      <div className='header'>
          <div className="header_info">
             
              <TemporaryDrawer />
              <IconButton>
                  <img src={formlogo} style={{width: '35px', height:'40px'}} alt=""  />
              </IconButton>      
              <div className="info">
                  Forms
              </div>
          </div>
          <div className="header_search">             
              <IconButton>
                  <Search />
              </IconButton>
              <input type="text" name='search' placeholder='Search...' />
          </div>
          <div className="header_right">
              <IconButton>
                 <Apps /> 
              </IconButton>
              <IconButton>
                  <Avatar src='' />
              </IconButton>
          </div>
    </div>
  )
}

export default Header