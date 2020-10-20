import React from 'react'
import '../CSS/sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className='sidebar'>
      <img className='sidebar_logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='side-logo' />
      <SidebarOption Icon ={HomeIcon}  title='Home'  />
      <SidebarOption Icon={SearchIcon} title='Search' />
      <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
      <br/>
      <strong className='sidebar_title' >PLAYLIST</strong>
      <hr/>
    </div>
  )
}

export default Sidebar
