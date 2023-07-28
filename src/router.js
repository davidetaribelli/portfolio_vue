import { createRouter, createWebHistory } from "vue-router";

import AppMain from './pages/AppMain.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/events",
            name: "events",
            component:AppMain
        },
        
    ]
});

export {router};