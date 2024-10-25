import React from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import OurService from '../components/OurService'
// import anime from '../components/anime.js'
function Home() {

  return (
    <div className="">
      <div  id='/#intro'>
        <Intro />
      </div>
      <div  id='/#about'>
        <About />
      </div>
      <div  id='/#ourService'>
        <OurService />
      </div>
    </div>
  )
}

export default Home