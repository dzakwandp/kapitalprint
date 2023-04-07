<template>
  <div
    class="bg-black bg-opacity-70 text-soft-brown py-3.5 md:px-6 md:flex justify-between items-center fixed w-screen z-20 top-0 font-body"
  >
    <!-- logo placement -->
    <div class="flex-item-center cursor-pointer ml-4">
      <img
        class="max-h-16 max-w-16 md:items-start items-center"
        src="@/assets/logo_softbrown.png" @click="routerHome"
      />
    </div>
    <!-- button for responsive menu -->
    <div class="absolute md:hidden right-6 top-6">
      <button
        :class="{ hidden: closeButton }"
        @click="
          (showMobileMenu = !showMobileMenu),
            (closeButton = !closeButton),
            (menuButton = !menuButton)
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <button
        :class="{ hidden: menuButton }"
        @click="
          (showMobileMenu = !showMobileMenu),
            (menuButton = !menuButton),
            (closeButton = !closeButton)
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <!-- dekstop menu -->
    <ul
      class="hidden md:flex items-center px-0 pb-0 static w-auto top-14"
    >
      <li
        class="md:mx-4 md:items-center md:my-0 my-6"
        v-for="link in links"
        :key="link.name"
        :to="link.route"
      >
        <router-link :to="link.route" class="text-xl hover:text-aqua">{{
          link.name
        }}</router-link>
      </li>
    </ul>
    <!-- mobile menu -->
    <Transition>
      <div
        class="bg-black flex-auto items-center px-6 absolute h-screen w-full top-18 md:hidden"
        v-show="showMobileMenu"
      >
        <div
          class="my-4"
          v-for="link in links"
          :key="link.name"
          :to="link.route"
          @click="showMobileMenu = false, menuButton= true, closeButton= false"
        >
          <router-link :to="link.route" class="text-xl hover:text-aqua">{{
            link.name
          }}</router-link>
        </div>
      </div>
    </Transition>
  </div>
  <router-view></router-view>
</template>

<script>
import router from '@/router';
export default {
  data() {
    return {
      links: [
        { name: "Home", route: "/" },
        { name: "Product", route: "/product" },
        { name: "Blog", route: "/blog" },
        { name: "Contact", route: "/contact" },
      ],
      showMobileMenu: false,
      menuButton: true,
      closeButton: false,
    };
  },
  methods:{
    routerHome(){
      router.push("/")
    }
  }
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>