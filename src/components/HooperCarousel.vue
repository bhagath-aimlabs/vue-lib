<template>
  <hooper
    :style="hooperStyle"
    :settings="hooperSettings"
  >
    <slide :key="index" v-for="(item,index) in items">
      <img v-bind:src="item.src" width=100% />
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'Carousel',
  props: {
    hooperSettings: Object,
    hooperStyle: Object,
    items: Array
  },
  components: {
    Hooper,
    Slide
  },
  data: () => ({
    hover: 'scale'
  })
}
</script>

<style>
</style>
