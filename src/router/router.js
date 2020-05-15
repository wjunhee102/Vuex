import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from'../components/home.vue';
import Detail from '../components/detail.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/detail:id',
            component: Detail,
            props: route => ({id : Number(route.params.id)})
        }
    ]
})
