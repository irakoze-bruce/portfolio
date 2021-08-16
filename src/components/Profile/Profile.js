import React from 'react'
import style from './Profile.module.css'
import profileImage from '../../assets/images/download.jpeg'
import { IoCall } from 'react-icons/io5'

export default function Profile() {
  return (
    <div className={style.profile_container}>
      <div className={style.image}>
        <img src={profileImage} alt="img" />
      </div>
      <div className={style.description}>
        <h1>Ira Bruce</h1>
        <span>Bujumbura,BURUNDI</span>
        <p><a href="/" ><span><IoCall /></span> +257 79 335 848</a></p>
      </div>
    </div>
  )
}
