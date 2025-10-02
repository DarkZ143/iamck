import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomeHeroSection from './components/HomeSection'
import About from './components/about'
import ProductDesign from './components/designs'
import Contact from './components/contact'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-20 pb-20'>
        <HomeHeroSection />
        <About />
        <ProductDesign />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home
