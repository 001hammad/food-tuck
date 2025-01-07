import React from 'react'; // Import React
import Hero from '../Components/AboutHero' // Import Hero component for the hero section
import Aboutus from '../Components/AboutUs'; // Import AboutUs component for the content section

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero title='About Us' homeLink='/' currentPage='About' backgroundImage='/starbg.png' />
      
      {/* About Us Section */}
      <Aboutus/>
      
    </div>
  )
}

export default About;
