import { createRouter, createWebHashHistory } from 'vue-router';
import {useAuthStore} from '../stores/authStore';



const routes = [
    { 
        path: '/',
        redirect: '/public'
    },
    { 
        path: '/public',
        name: 'public',
        component: () => import('../layouts/PublicLayout.vue'),
        children: [
            {
                path: '',
                name: 'public-home',
                component: () => import('../pages/Home.vue'),
            },
            {
                path: 'shop',
                name: 'public-shop',
                component: () => import('../pages/shop/Shop.vue'),
            },
            {
                path: 'wishlist',
                name: 'public-wishlist',
                component: () => import('../pages/Wishlist.vue'),
            },
            {
                path: 'contact',
                name: 'public-contact',
                component: () => import('../pages/user/forms/Contact.vue'),
            },
            {
                path: 'login',
                name: 'public-login',
                component: () => import('../pages/user/forms/Login.vue'),
            },
            {
                path: 'signup',
                name: 'public-signup',
                component: () => import('../pages/user/forms/Signup.vue'),
            },
            {
                path: ':id',
                name: 'public-id',
                component: () => import('../pages/shop/IndividualProduct.vue'),
            },
        ]
    },
    { 
        path: '/private',
        name: 'private',
        component: () => import('../layouts/PrivateLayout.vue'),
        children: [
            {
                path: 'profile',
                name: 'private-profile',
                component: () => import('../pages/user/userPage/Profile.vue'),
                beforeEnter: (to, from, next) => {
                    const authStore = useAuthStore()
                    if (authStore.user) {
                        next('/public/shop')
                    } else {
                        next()
                    }
                }
            }
        ]
    },
    { 
        path: '/:pathMatch(.*)*',
        component: () => import('../shared/NotFound404.vue'),
    },
];



const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
