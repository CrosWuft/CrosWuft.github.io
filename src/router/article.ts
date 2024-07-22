import type { RouteRecordRaw } from "vue-router";
export default {
    path: '',
    component: () => import('@/App.vue'),
    chuildren: [
        {
            name: 'home',
            path: '',
            component: () => import('@/views/FirstArticle.vue'),
        }
    ]
} as RouteRecordRaw