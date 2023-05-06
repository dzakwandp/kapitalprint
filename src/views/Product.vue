<template>
  <div class="grid md:grid grid-rows-2 h-fit">
    <!-- title -->
    <div
      class="hidden md:grid text-soft-brown justify-center items-start font-body font-medium text-4xl text-center mt-24">
      Our Product
    </div>
    <!-- items -->
    <div v-if="loading" class="animate-pulse text-soft-brown text-center font-body text-lg mt-10">
      Please wait...
    </div>
    <div v-else>
      <div class="hidden md:grid grid-cols-3 justify-items-center -mt-[50px]">
        <div class="mb-12" v-for="(item, index) in items" :key="index">
          <img :src="item.image" class="object-contain h-48 w-96" alt="item.title">
          <div class="grid md:grid text-soft-brown font-body font-medium text-l text-center">{{ item.title }}</div>
          <div class="grid md:grid text-soft-brown font-body font-medium text-xs text-center">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Product",
  data() {
    return {
      items: [],
      loading: true
    }
  },
  async mounted() {
    try {
      const response = await axios.get('https://kapitalprint-backend.vercel.app/api/items')
      this.items = response.data
      this.loading = false
    } catch (error) {
      this.error = error.message
      this.loading - false
    }
  }
}
</script>

<style></style>