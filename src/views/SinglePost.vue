<template>
  <!-- desktop post -->
  <div class="grid grid-rows-1 h-fit">
    <!-- content -->
    <!-- back to blog -->
    <router-link to="/blog"
      class="flex flex-row text-soft-brown items-center font-body font-medium text-sm mt-24 ml-8">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg>
      Kembali
    </router-link>
    <!-- post content -->
    <div v-if="loading" class="animate-pulse text-soft-brown text-center font-body text-lg mt-10">
      Please wait...
    </div>
    <div v-else
      class="flex flex-col text-soft-brown items-start font-body font-medium text-4xl text-left mt-8 ml-8 mb-14">
      {{ post.title }}
      <div class="hidden md:flex text-soft-brown items-center font-body font-medium text-xs mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-5 h-5 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {{ formattedDate }}
      </div>
      <div class="flex h-[150px] w-[300px] md:h-[300px] md:w-[600px]">
        <img class="object-cover" :src="post.image" :alt="post.title">
      </div>
      <div v-html="post.body" class="wrapper font-light mt-4"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
export default {
  data() {
    return {
      post: [],
      loading: true
    }
  },
  computed: {
    formattedDate() {
      return moment(this.post.createdAt).format('D MMM YYYY: HH:m')
    }
  },
  async mounted() {
    try {
      const response = await axios.get("https://kapitalprint-backend.vercel.app/api/blogs/" + this.$route.params.id)
      this.post = response.data,
        this.loading = false
        console.log(this.post)
    }
    catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
.wrapper ul{
  @apply list-disc;
  @apply ml-12
}
.wrapper ol{
  @apply list-decimal;
  @apply text-base;
  @apply ml-12
}
.wrapper h1{
  @apply text-4xl
}
.wrapper p{
  @apply text-base
}
</style>