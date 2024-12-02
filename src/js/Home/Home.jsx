import React from 'react'
import Banner from '../BannerSection/Banner'
import Services from '../Services/Services';
import Event from '../Event/Event';
import Activity from '../Activity/Activity';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';
import Attraction from '../Attraction/Attraction';
import { useLayoutEffect } from 'react'
import { imagePath } from '../../media/imagePath';
import { MetaTags } from 'react-meta-tags';
const Youtube = imagePath.bannerfinal
function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <MetaTags>
        <title>Farmhouse in Wada | Omkar Nature Farm</title>
        <meta title="Farmhouse in Wada | Omkar Nature Farm" />
        <meta name="description" content="Farmhouse in Wada, Farmhouse in Wada for Family, Best Farmstay in Wada, Farmhouse for Events in Wada, Farmhouse with Private Pool in Wada, Private Farmhouse in Wada, Farmstay near Wada," />
        <link rel="canonical" href="https://omkarnaturefarm.in/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equisv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Farmhouse in Wada | Omkar Nature Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omkarnaturefarm.in/" />
        <meta property="og:description" content="Discover the charm of rural living at our picturesque Farmhouse in Wada. Nestled amidst serene landscapes, our farmhouse offers a tranquil retreat." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <Banner />
      <Services />
      <Event />
      <Activity />
      <Attraction />
      <Testimonial />
      {/* <Youtube/> */}
      <Footer />
    </>
  )
}

export default Home
