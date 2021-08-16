import React from 'react'
import NavBar from '../NavBar/NavBar'
import Profile from '../Profile/Profile'
import SocialMedia from '../SocialMedia/SocialMedia'
import style from './SideBar.module.css'



export default function SideBar() {
  return (
    <div className={style.SideBar}>
      <div className={style.row}>
        <Profile />
        <NavBar />
        <SocialMedia />
      </div>
    </div>
  )
}
