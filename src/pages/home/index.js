import React, { Fragment } from 'react'
import Navbar from '../../components/navbar/index'
import CarrouselBanner from '../../components/CarrouselBanner'
import Vitrine from '../../components/vitrine'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

export default function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <CarrouselBanner />
      <Vitrine />
      <Newsletter />
      <Footer />
    </Fragment>
  )
}
