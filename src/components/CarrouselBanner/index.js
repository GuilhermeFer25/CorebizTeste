import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import Banner from '../../assets/images/Banner.png'
import Banner2 from '../../assets/images/Banner2.jpg'
import Banner3 from '../../assets/images/Banner3.jpg'

export default class CarrouselBanner extends React.Component {
  render() {
    return (
      <div className="md max-w-7xl mx-auto h-96">
        <Splide>
          <SplideSlide>
            <img src={Banner} alt="Slide Banner 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={Banner2} alt="Slide Banner 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={Banner3} alt="Slide Banner 3" />
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}
