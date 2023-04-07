<template>
  <v-app >
    <Navbar></Navbar>
    <v-main> </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"
export default {
  name: "Landing",
  components: { Navbar, Footer },
  data: () => ({}),
  mounted() {
    document.body.classList.add("bg-black");
  },
};
</script>

<style>
</style>