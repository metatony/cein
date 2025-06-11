import React from 'react'
import Hero from './hero/Hero'
import Categories from './categories/Categories'
import Carousel from './carousel/Carousel'
import CollectionBanner from './collection banner/CollectionBanner'
import InstaSection from './instagram section/InstaSection'

function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Carousel Section */}
      <Carousel />

      {/* Collection Banner Section */}
      <CollectionBanner />

      {/* Instagram Section */}
      <InstaSection />
    </div>
  )
}

export default LandingPage
