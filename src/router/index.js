import { createRouter, createWebHistory } from 'vue-router'
import Landing from "@/views/Layout/Landing.vue"
import Home from "@/views/Home.vue"
import Product from "@/views/Product.vue"
import Blog from "@/views/Blog.vue"
import Contact from "@/views/Contact.vue"

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
    children:[
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'product',
        name: 'product',
        component: Product
      },
      {
        path: 'blog',
        name: 'blog',
        component: Blog
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
