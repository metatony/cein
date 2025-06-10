import React from 'react'
import Images from '../../constants/images'
import Hero from './hero/Hero'
import Categories from './categories/Categories'
import Carousel from './carousel/Carousel'
import CollectionBanner from './collection banner/CollectionBanner'
import InstaSection from './instagram section/InstaSection'

function LandingPage() {
  return (
    <>
    <Hero />

    <Categories />

    <Carousel />

    <CollectionBanner/>

    <InstaSection/>



    </>

  )
}

export default LandingPage
