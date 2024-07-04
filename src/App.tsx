import { useState } from 'react'

import './App.css'
import Home from './Components/Home/Home'
import BookSection from './Components/BookSection/BookSection'
import Services from './Components/Services/Services'
import Gallery from './Components/Gallery/Gallery'
import AboutUs from './Components/AboutUs/AboutUs'
import NavScrollExample from './Components/NavScrollComponenet/NavScrollComponenet'
import ImageCollection from './Components/ImageCollection/ImageCollection'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    
     <NavScrollExample/>
     <Home/>
     <ImageCollection/>
     <BookSection/>
     <Gallery/>
     <Services/>
     <AboutUs/>
     <Footer/>
    </>
  )
}

export default App
