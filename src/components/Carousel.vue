<template>
  <!-- svg items -->
  
    <svg class="hidden md:grid fixed z-0" id="sw-js-blob-svg" viewBox="3 3 90 90" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#sw-gradient)"
        d="M17.6,-25.9C22.6,-20.6,26.3,-15.2,26.8,-9.7C27.3,-4.1,24.6,1.5,21.5,5.8C18.4,10.1,15.1,13.1,11.4,16.7C7.8,20.4,3.9,24.6,-1.7,27C-7.3,29.3,-14.7,29.8,-20.8,27C-26.9,24.2,-31.7,18,-30.3,12.2C-28.8,6.5,-21.1,1,-19.4,-7C-17.7,-15,-22,-25.6,-19.8,-31.8C-17.5,-38.1,-8.8,-40,-1.2,-38.3C6.3,-36.6,12.6,-31.3,17.6,-25.9Z"
        width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: all 0.3s ease 0s;"
        stroke="url(#sw-gradient)"></path>
    </svg>
  <!-- slider container item -->
  <div class="hidden md:flex relative items-center w-[250px] overflow-hidden -mt-6 z-10">
    <!-- image container -->
    <div v-for="slide in slides" :key="slide.name"
      class="w-[250px] min-w-[250px] max-w-[250px] duration-300 scroll-smooth"
      :style="{ transform: `translateX(${-250 * (currentSlide - 1)}px)` }">
      <img :src="slide.image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      theInterval: null,
      currentSlide: 1,
      slides: [
        { name: "plakat1", image: "https://i.imgur.com/ewUhjOR.jpg" },
        { name: "ganci1", image: "https://i.imgur.com/KSutMLt.jpg" },
        { name: "plakat2", image: "https://i.imgur.com/Svoj16s.jpg" }
      ]
    }
  },
  mounted() {
    this.theInterval = setInterval(this.nextSlide, 3000)
  },
  beforeDestroy() {
    clearInterval(this.theInterval)
  },
  methods: {
    nextSlide() {
      if (this.currentSlide === 3) {
        this.currentSlide = 1
      }
      else {
        this.currentSlide++
      }
    }
  }
};
</script>

<style></style>