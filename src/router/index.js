import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '@/admincomponents/Dashboard'
import DashboardHome from '/@admin/pages/Home'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, { path: '/admin', redirect: { name: 'DashboardHome' } },
    {
        path: '/admin/dashboard',
        component: Dashboard,
        children: [
            { path: '/', redirect: { name: 'DashboardHome' } },
            { path: 'home', name: 'DashboardHome', component: DashboardHome }
        ]
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router