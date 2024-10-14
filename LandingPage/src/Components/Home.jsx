import React from 'react'
import Testimonial from './Testimonial'
import Info from './Info'
import InfoContent from './InfoContent'
import Benefits from './Benefits'
import HappyCustomer from './HappyCustomer'
import HealthMarket from './HealthMarket'
// import Highlights from './Highlights'
import Speaker2 from './Speaker2'
import Faq from './Faq'
import Footer from './Footer'
import ContactUs from './ContactUs'
// import DeathChart from './DeathChart'


function Home() {
  return (
    <>
        <Info/>
        <InfoContent/>
        <Testimonial/>
        <Benefits/>
        <HappyCustomer/>
        <HealthMarket/>
        {/* <DeathChart/> */}
        {/* <Highlights/> */}
        <Speaker2/>
        <ContactUs/>
        <Faq/>
        <Footer/>
    </>
  )
}

export default Home