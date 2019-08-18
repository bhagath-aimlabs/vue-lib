import Vue from 'vue'

import Clock from './components/Clock'
import Carousel from './components/Carousel'
import HooperCarousel from './components/HooperCarousel'

const Components = {
  Clock,
  Carousel,
  HooperCarousel
}

Object
  .keys(Components)
  .forEach(name => { Vue.component(name, Components[name]) })

export default Components
export Components.Carousel as Carousel
export Components.HooperCarousel as HooperCarousel
