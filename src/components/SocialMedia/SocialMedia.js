import React from 'react'
import style from './socialMedia.module.css'
import { IoLogoFacebook } from 'react-icons/io5'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SocialMedia() {
  return (
    <div className={style.SocialMedia}>

      <ul >
        <li><Link target="_blank" to="https://twitter.com/dev_IraBruce/photo "> <span><AiFillTwitterCircle /></span> </Link></li>
        <li><Link target="_blank" to="https://mail.google.com/mail/u/0/#inbox"><span><SiGmail /></span></Link></li>
        <li><Link target="_blank" to="https://github.com/irakoze-bruce"><span><AiOutlineGithub /></span></Link></li>
        <li> <Link target="_blank" to=""><span><FaWhatsapp /></span></Link></li>
        <li> <Link target="_blank" to=""><span><IoLogoFacebook /></span></Link></li>
        <li> <Link target="_blank" to=""><span><AiFillInstagram /></span></Link></li>
      </ul>

    </div>
  )
}
