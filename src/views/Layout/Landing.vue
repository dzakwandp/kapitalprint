<template @scroll="onScroll()">
  <v-app>
    <Navbar></Navbar>
    <v-main> </v-main>
    <Footer></Footer>
    <!-- button to top -->
    <button ref="toTop"
      class="fixed bottom-4 right-4 bg-aqua hover:bg-soft-brown hover:text-aqua text-soft-brown font-bold py-2 px-4 rounded"
      :class="{ 'hidden': shouldHide }" @click="scrollToTop()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"
export default {
  name: "Landing",
  components: { Navbar, Footer },
  data: () => ({
    shouldHide: true,
  }),
  methods: {
    onScroll(e) {
      let scrollYPosition
      scrollYPosition = window.top.scrollY
      if (scrollYPosition > 500) {
        this.shouldHide = false
      }
      if (scrollYPosition < 200) {
        this.shouldHide = true
      }
      // console.log('Scroll Position', scrollYPosition)
      // e.target.documentElement.scrollTop
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },

  mounted() {
    document.body.classList.add("bg-black"),
      window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  }
};
</script>

<style></style>