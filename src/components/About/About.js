import React from 'react'
import style from './about.module.css'

export default function About() {
  return (
    <div className={style.About}>

      <div className={style.About_row}>
        <h1 className={style.About_title}>About me</h1>


        <div className={style.About_descr}>
          {/* <p>I am a computer grad student from DAIICT-Gandhinagar with ICT as my major.I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years (apart from the headphone-jack part!!)

          I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistaks are very often.You can write me back if you spot any and don't want to live anymore
</p> */}
          <p>
            Hello!</p>
          <p>I'm a self taught Front-End Developer ,</p>
          <p>I study and code myself for Web(JavaScript [ReactJs,Angular], Html And Css).</p>



        </div>
      </div>

    </div >
  )
}
