import React from 'react'
import ArcadeLXHero from '../components/ArcadeLXHero'
import FeaturedGames from '../components/sections/FeaturedGames'
import WhyArcadeLX from '../components/sections/WhyArcadeLX'
import VideoSection from '../components/VideoSection'
import ProductFeatures from '@/components/sections/Productfeatured'
import Gallery from '@/components/Gallery'
import ReadyToBringArcadeLX from '@/components/Readytobringarcadelx'
function page() {
  return (
    <>
      <ArcadeLXHero />
      <ProductFeatures/>
      <Gallery></Gallery>
      <WhyArcadeLX />
      <FeaturedGames />
      <VideoSection />
      <ReadyToBringArcadeLX />

    </>
  )
}

export default page
