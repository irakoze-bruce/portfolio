import React from 'react'
import { Link } from 'react-router-dom'
import About from '../About/About'
import Blog from '../Blog/Blog'
import Skills from '../Skills/Skills'
import { Switch, Route } from 'react-router-dom'
import style from './Navbar.module.css'
import Home from '../Home/Home'
import { GoHome } from 'react-icons//go';
import { GiPerson } from 'react-icons/gi'
import { GiSkills } from 'react-icons/gi'
import { FaBlog } from 'react-icons/fa'

export default function NavBar() {
  return (
    <div className={style.NavBar}>
      <ul>
        <li>
          <Link to="/"
            activeClassName={style.active}
            exact>
            <span>
              <GoHome />
            </span>
             Home
              </Link>
        </li>
        <li>   <Link to="/about"><span><GiPerson /></span> About </Link></li>
        <li>   <Link to="/skills"><span><GiSkills /></span> Skills </Link></li>
        <li>   <Link to="/blog"><span><FaBlog /></span> Blog</Link></li>
      </ul>

      <main className={style.main}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/skills" component={Skills} exact />
          <Route path="/blog" component={Blog} exact />

        </Switch>
      </main>
    </div>



  )

}
