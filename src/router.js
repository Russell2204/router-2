import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

import Home from '@/pages/Home.vue'
import Cars from '@/pages/Cars.vue'
import About from '@/pages/About.vue'
import CurrentCar from '@/pages/CurrentCar.vue'

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/cars', name: 'cars', component: Cars },
        { path: '/about', name: 'about', component: About },
        { path: '/cars/:id', name: 'currentCar', component: CurrentCar },
    ]
})
export default routers