import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from "../layout/MainLayout"
import LibraryDetail from "../pages/LibraryDetail";
import LibraryList from "../pages/LibraryList";
import LibraryModify from "../pages/LibraryModify";
import LibrarySearch from "../pages/LibrarySearch";
import LibraryRegister from "../pages/LibraryRegister";
import LibraryRequest from "../pages/LibraryRequest";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainLayout,
    },
    {
        path: '/main',
        component: MainLayout,
        children: [
            {
                path: 'register',
                component: LibraryRegister
            },
            {
                path: 'search',
                component: LibrarySearch
            },
            {
                path: 'detail',
                component: LibraryDetail
            },
            {
                path: 'list',
                component: LibraryList
            },
            {
                path: 'modify',
                component: LibraryModify
            },
            {
                path: 'request',
                component: LibraryRequest
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
