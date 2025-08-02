import { createRouter, createWebHistory } from 'vue-router'

import Rueckmeldung from '@/views/Rueckmeldung.vue'
import Location from '@/views/Location.vue'
import Unterkunft from '@/views/Unterkunft.vue'
import Details from '@/views/Details.vue'
import Faq from "@/views/Faq.vue";
import Home from "@/views/Home.vue";
import PhotoGallery from "@/views/PhotoGallery.vue";

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/rueckmeldung', component: Rueckmeldung },
    { path: '/location', component: Location },
    { path: '/unterkunft', component: Unterkunft },
    { path: '/details', component: Details },
    { path: '/faq', component: Faq },
    { path: '/photoGallery', component: PhotoGallery },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
})

export default router
