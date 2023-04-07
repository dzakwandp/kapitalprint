<template @scroll="onScroll()">
  <div class="grid md:grid grid-cols-2 h-screen justify-center transform overflow-y-clip">
    <!-- left side main landing -->
    <div class="hidden md:grid px-4 h-full place-content-center mt-16">
      <img src="@/assets/kapitalprint-main.png" />
    </div>
    <!-- right side main landing -->
    <div class="hidden md:grid h-full justify-items-center items-center mt-20">
      <Carousel></Carousel>
    </div>
    <!-- mobile main landing -->
    <div class="grid col-span-full px-4 h-full place-content-center md:hidden">
      <img src="@/assets/kapitalprint-main.png" />
    </div>
    <!-- button to second main landing -->
    <div class="grid col-span-2 justify-center relative">
      <img src="@/assets/landing-button.png" class="place-self-center max-w-[100px] cursor-pointer"
        @click="scrollToSecond()" />
    </div>
  </div>
  <!-- second main landing -->
  <div ref="second" class="grid md:grid grid-rows-2 h-screen transform bg-cover"
    style="background-image: url('https://i.imgur.com/b2kUlKX.jpg');">
    <!-- upper second main -->
    <div class="hidden md:grid text-soft-brown justify-center items-center font-body font-medium text-4xl text-center">
      Kenapa Kapital Printing?
    </div>
    <!-- lower second main -->
    <div class="hidden md:grid grid-cols-3 -mt-24 text-soft-brown">
      <!-- first item -->
      <div class="grid md:grid w-full justify-items-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
        <div class="grid md:grid text-soft-brown font-body font-medium text-2xl">
          Kecepatan Dalam Pengerjaan
        </div>
        <div class="grid md:grid text-soft-brown font-body font-medium text-l text-center">
          Kapital Printing mempunyai alat dan bahan yang memadai sehingga bisa mewujudkan pengerjaan 1 hari jadi.
        </div>
      </div>
      <!-- second item -->
      <div class="grid md:grid w-full justify-items-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
        <div class="grid md:grid text-soft-brown font-body font-medium text-2xl">
          Biaya Terjangkau
        </div>
        <div class="grid md:grid text-soft-brown font-body font-medium text-l text-center">
          Kapital Printing memberikan kemudahan dalam melakukan pelunasan, bahkan kapital printing sudah tersedia di
          Tokopedia dan Shopee untuk melakukan pembayaran.
        </div>
      </div>
      <!-- third item -->
      <div class="grid md:grid w-full justify-items-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
        <div class="grid md:grid text-soft-brown font-body font-medium text-2xl">
          Respon Cepat
        </div>
        <div class="grid md:grid text-soft-brown font-body font-medium text-l text-center">
          Kapital Printing menyediakan fitur respon cepat dengan chat bot dan layanan customer service 24jam.
        </div>
      </div>
    </div>
    <!-- mobile upper second main -->
    <div
      class="md:hidden grid text-soft-brown justify-center items-center font-body font-medium text-4xl text-center -mt-20">
      Kenapa Kapital Printing?
    </div>
    <!-- mobile lower second main -->
    <div class="md:hidden grid grid-row-3 -mt-32 text-soft-brown">
      <!-- mobile first item -->
      <div class="md:grid grid w-full justify-items-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
        <div class="grid md:grid text-soft-brown font-body font-medium text-xl">
          Kecepatan Dalam Pengerjaan
        </div>
        <div class="grid md:grid text-soft-brown font-body font-medium text-xs text-center">
          Kapital Printing mempunyai alat dan bahan yang memadai sehingga bisa mewujudkan pengerjaan 1 hari jadi.
        </div>
      </div>
      <!-- mobile second item -->
      <div class="md:grid grid w-full justify-items-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
        <div class="grid md:grid text-soft-brown font-body font-medium text-xl">
          Biaya Terjangkau
        </div>
        <div class="grid md:grid text-soft-brown font-body font-medium text-xs text-center">
          Kapital Printing memberikan kemudahan dalam melakukan pelunasan, bahkan kapital printing sudah tersedia di
          Tokopedia dan Shopee untuk melakukan pembayaran.
        </div>
      </div>
      <!-- mobile third item -->
      <div class="md:grid grid w-full justify-items-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
        <div class="grid md:grid text-soft-brown font-body font-medium text-xl">
          Respon Cepat
        </div>
        <div class="grid md:grid text-soft-brown font-body font-medium text-xs text-center">
          Kapital Printing menyediakan fitur respon cepat dengan chat bot dan layanan customer service 24jam.
        </div>
      </div>
    </div>
  </div>
  <!-- third main landing -->
  <div class="grid md:grid grid-rows-2 h-fit">
    <!-- testi title -->
    <div class="hidden md:grid text-soft-brown justify-center items-start font-body font-medium text-4xl text-center mt-24">
      Testimonials
    </div>
    <!-- testi items -->
    <div class="hidden md:grid grid-cols-3 justify-items-center -mt-[525px]">
      <div v-for="(image, index) in testiImage" :key="index">
        <img :src="image" class="object-cover mx-12 mb-12" alt="Testimonials">
      </div>
    </div>
    <!-- mobile testi title -->
    <div class="md:hidden grid text-soft-brown justify-center items-start font-body font-medium text-4xl text-center mt-24">
      Testimonials
    </div>
    <!-- mobile testi items -->
    <div class="md:hidden grid grid-cols-2 justify-items-center -mt-[550px]">
      <div v-for="(image, index) in testiImage" :key="index">
        <img :src="image" class="object-cover mx-auto mb-12 w-2/3" alt="Testimonials">
      </div>
    </div>
  </div>
  <!-- button to top -->
  <button ref="toTop"
    class="fixed bottom-4 right-4 bg-aqua hover:bg-soft-brown hover:text-aqua text-soft-brown font-bold py-2 px-4 rounded"
    :class="{ 'hidden': shouldHide }" @click="scrollToTop()">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
    </svg>
  </button>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  name: "Home",
  components: { Carousel },
  data() {
    return {
      shouldHide: true,
      testiImage: [
        "https://kapitalprinting.com/wp-content/uploads/2022/05/whatsapp-image-2020-10-06-at-15.12.011.webp",
        "https://kapitalprinting.com/wp-content/uploads/2022/05/whatsapp-image-2020-10-06-at-15.12.01.webp",
        "https://kapitalprinting.com/wp-content/uploads/2022/05/whatsapp-image-2020-10-06-at-15.15.13.webp",
        "https://kapitalprinting.com/wp-content/uploads/2022/05/whatsapp-image-2020-10-12-at-20.03.45.webp",
        "https://kapitalprinting.com/wp-content/uploads/2022/05/whatsapp-image-2020-10-12-at-20.03.46.webp",
        "https://kapitalprinting.com/wp-content/uploads/2022/05/whatsapp-image-2020-10-12-at-20.03.461.webp",
        "https://kapitalprinting.com/wp-content/uploads/2022/05/whatsapp-image-2020-12-17-at-10.57.18-1.webp",
        "https://kapitalprinting.com/wp-content/uploads/2022/05/whatsapp-image-2020-12-17-at-10.57.18-2.webp",
        "https://kapitalprinting.com/wp-content/uploads/2022/05/whatsapp-image-2020-12-17-at-10.57.18.webp"
      ]
    };
  },
  methods: {
    scrollToSecond() {
      this.$refs["second"].scrollIntoView({ behavior: "smooth" });
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
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
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  }
};
</script>

<style scoped></style>
