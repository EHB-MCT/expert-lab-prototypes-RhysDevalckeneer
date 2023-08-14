import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabBar from '../components/navigation/TabBar.vue';

import { supabase } from '../lib/supbaseClient';
let localUser;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/AuthPage.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    component: TabBar,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('../views/HomePage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'search',
        component: () => import('../views/SearchPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'settings',
        component: () => import('../views/SettingsPage.vue'),
        meta: { requiresAuth: true }
      },
    ],
  },
  {
    path: '/boardgame/:id',
    component: () => import('../views/DetailPage.vue'),
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// get user
async function getUser(next: any) {
  localUser = await supabase.auth.getSession();
  if(localUser.data.session == null ) {
    return next("/auth");
  } else {
    next();
  }
}

// auth requirements
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    // console.log("requires auth");
    getUser(next);
  } else next();
})

export default router
