import React from 'react'
import './Home.css'
import HeroImage from '../components/HeroImage/HeroImage'
import NavImage from '../components/NavImage/NavImage'

function Home() {
  return (
    <div className='Home'>
        <HeroImage/>
        <NavImage/>
    </div>
  )
}

export default Home