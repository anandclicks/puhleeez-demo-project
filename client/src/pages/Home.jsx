import React from 'react'
import Navbar from '../components/Navbar'
import BannerSlider from '../components/BannerSlider'
import Category from '../components/Category'
import BannerTwo from '../components/BannerTwo'
import HotSells from '../components/HotSells'
import BannerThree from '../components/BannerThree'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div className='max-w-[1300px] mx-auto lg:p-5'>
      {/* Banner  */}
      <BannerSlider/>
      {/* category  */}
      <Category/>
      {/* 2nd banner  */}
      <BannerTwo/>
      {/* Hot sells  */}
      <HotSells/>
      {/* bannerThree  */}
      <BannerThree/>
      {/* FAQ  */}
      <FaqSection/>
    </div>
  )
}

export default Home