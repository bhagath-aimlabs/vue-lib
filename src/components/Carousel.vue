<template>
  <div class="card-carousel"
    @mouseover="stopTimer"
    @mouseleave="restartTimer">
    <div class="card-img">
      <img class="fade" :src="currentImage" alt="currentImage.title">
      <div class="actions">
        <span @click="prevImage" class="prev">
          &#8249;
        </span>
        <span @click="nextImage" class="next">
          &#8250;
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    startingImage: Number,
    images: Array,
    autoSlideInterval: Number
  },
  data () {
    return {
      // Index of the active image
      activeImage: 0,
      // Hold the timeout, so we can clear it when it is needed
      autoSlideTimeout: null,
      // If the timer is stopped e.g. when hovering over the carousel
      stopSlider: false,
      // Hold the time left until changing to the next image
      timeLeft: 0
    }
  },
  computed: {
    // currentImage gets called whenever activeImage changes
    // and is the reason why we don't have to worry about the
    //  src image getting updated
    currentImage () {
      return this.images[this.activeImage].src
    }
  },
  methods: {
    // Go forward on the images array
    // or go at the first image if you can't go forward
    nextImage () {
      var active = this.activeImage + 1
      if (active >= this.images.length) {
        active = 0
      }
      this.activateImage(active)
    },
    // Go backwards on the images array
    // or go at the last image
    prevImage () {
      var active = this.activeImage - 1
      if (active < 0) {
        active = this.images.length - 1
      }
      this.activateImage(active)
    },
    activateImage (imageIndex) {
      this.activeImage = imageIndex
    },
    // Wait until 'interval' and go to the next image
    startTimer (interval) {
      if (interval && interval > 0 && !this.stopSlider) {
        var self = this
        clearTimeout(this.autoSlideTimeout)
        this.autoSlideTimeout = setTimeout(function () {
          self.nextImage()
          self.startTimer(self.autoSlideInterval)
        }, interval)
      }
    },
    // Stop the timer when hovering over the carousel
    stopTimer () {
      clearTimeout(this.autoSlideTimeout)
      this.stopSlider = true
      clearInterval(this.timerInterval)
    },
    // Restart the timer(with 'timeLeft') when leaving from the carousel
    restartTimer () {
      this.stopSlider = false
      clearInterval(this.timerInterval)
      // this.startCountdown()
      this.startTimer(this.timeLeft)
    }
  },
  created () {
    // Check if startingImage prop was given and if the index is inside the images array bounds
    if (this.startingImage &&
      this.startingImage >= 0 &&
      this.startingImage < this.images.length) {
      this.activeImage = this.startingImage
    }
    // Check if autoSlideInterval prop was given and if it is a positive number
    if (this.autoSlideInterval) {
      // Start the timer to go to the next image
      this.startTimer(this.autoSlideInterval)
      this.timeLeft = this.autoSlideInterval
    }
  }
}
</script>

<style>
.card-carousel {
  position: relative;
}
.card-img {
  position: relative;
  margin-bottom: 15px;
}
.card-img > img {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-height: fit-content;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1s;
}

/* Standard syntax */
@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

.actions {
  font-size: 1.5em;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #585858;
}
.actions > span {
  cursor: pointer;
  transition: all 250ms;
  font-size: 45px;
}
.actions > span.prev {
  margin-left: 5px;
}
.actions > span.next {
  margin-right: 5px;
}
</style>
