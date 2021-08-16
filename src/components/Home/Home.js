import React from 'react'
import style from './home.module.css'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import imgs from './Software-Study.jpeg'
import imgs1 from './Software-Study.jpeg'
import imgs2 from "../../assets/images/photo-1515879218367-8466d910aaa4.jpeg"

export default function Home() {
  return (
    <div className="slide-container">

      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={imgs} alt="igj" />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={imgs1} alt="sjhlda" />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={imgs2} alt="ajks" />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}
