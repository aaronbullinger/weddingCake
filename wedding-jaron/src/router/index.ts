import { createRouter, createWebHistory } from 'vue-router'

import Rueckmeldung from '../components/Rueckmeldung.vue'
import Location from '../components/Location.vue'
import Unterkunft from '../components/Unterkunft.vue'
import Details from '../components/Details.vue'
import Faq from "../components/Faq.vue";

const routes = [
    { path: '/rueckmeldung', component: Rueckmeldung },
    { path: '/location', component: Location },
    { path: '/unterkunft', component: Unterkunft },
    { path: '/details', component: Details },
    { path: '/faq', component: Faq },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
