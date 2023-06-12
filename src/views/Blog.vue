<template>
  <!-- desktop product -->
  <div class="grid grid-rows-2 h-fit">
    <!-- title -->
    <div
      class="grid text-soft-brown justify-center items-start font-body font-medium text-4xl text-center mt-24">
      Blogs
    </div>
    <!-- items -->
    <div v-if="loading" class="animate-pulse text-soft-brown text-center font-body text-lg mt-10">
      Please wait...
    </div>
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center -mt-[200px] mx-4 md:-mt-[50px]">
        <div class="mb-12" v-for="(item, index) in blogs" :key="index">
          <router-link style="text-decoration: none" :to="'/post/'+item.id">
            <img :src="item.image" class="object-cover h-48 w-96 hover:scale-110 transition-transform duration-300" :alt="item.title">
            <div class="grid md:grid text-soft-brown font-body font-medium text-xl text-left mt-4">{{ item.title }}</div>
            <div class="grid md:grid text-soft-brown font-body font-medium text-xs text-right wrapper">Created: {{
              formattedDate }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: "Blog",
  data() {
    return {
      blogs: [],
      loading: true
    }
  },
  computed: {
    formattedDate() {
      return moment(this.blogs.createdAt).format('DD-MM-YYYY')
    }
  },
  async mounted() {
    try {
      const response = await axios.get('https://kapitalprint-backend.vercel.app/api/blogs')
      this.blogs = response.data
      this.loading = false
    } catch (error) {
      this.error = error.message
      this.loading = false
    }
  }
}
</script>

<style></style>