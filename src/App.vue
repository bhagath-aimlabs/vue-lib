<template>
  <div id="app">
    <!-- <Carousel
      :hooperStyle="hooperStyle"
      :hooperSettings="hooperSettings"
      :items="items"
    ></Carousel>
    <Carousel
      :hooperStyle="hooperStyle"
      :hooperSettings="smallHooper"
      :items="items"
    ></Carousel> -->
    <carousel
      :starting-image="2"
      :images="items"
      :auto-slide-interval="3000"
    ></carousel>
    <router-view></router-view>
  </div>
</template>

<script>
import Carousel from './components/Carousel'
export default {
  components: {
    Carousel
  },
  data: () => ({
    hooperStyle: {
      height: 'auto'
    },
    hooperSettings: {
      infiniteScroll: true,
      itemsToShow: 1,
      autoPlay: true,
      playSpeed: '2000',
      centerMode: false
    },
    smallHooper: {
      infiniteScroll: true,
      itemsToShow: 3,
      autoPlay: true,
      playSpeed: '2000',
      centerMode: false,
      vertical: true
    },
    items: [
      {
        id: 12,
        src: '/assets/banners/ref.jpg'
      },
      {
        id: 1,
        src: '/assets/banners/PS_Banner.png'
      },
      {
        id: 2,
        src: '/assets/banners/MS_Banner.png'
      },
      {
        id: 3,
        src: '/assets/banners/ref.jpg'
      },
      {
        id: 4,
        src: '/assets/banners/PS_Banner.png'
      },
      {
        id: 5,
        src: '/assets/banners/MS_Banner.png'
      }
    ]
  })
}
</script>
<style>
#app{
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
