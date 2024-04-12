import { useState } from 'react'
import Navbar from './Components/Navbar'
import ImageSlider from './Components/ImageSlider'
import FlightDetails from './Components/FlightDetails'
import FeedbackCard from './FeedbackCard'
import Footer from './Components/Footer'
import LuxuryAd from './Components/LuxuryAd'
import ExperienceOurAirport from './Components/AirportExp'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Navbar />
    <ImageSlider />
    <br />
    <br />
    <LuxuryAd />
    <br />
    <br />
    <FlightDetails />
    <a href="#" className='purple-button' onClick={() => {window.open('src/assets/stuff/sus.html', '_self')}} style={{width: "80%", display: "block", margin: "0 auto", textAlign: "center", textDecoration: "none"}}>Show more...</a>
    <br />
    <ExperienceOurAirport />
    <FeedbackCard />
    <Footer />
    </>
  )
}

export default App
