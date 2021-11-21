import {
    createApp
} from 'vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'

import App from './App.vue';
import AddTime from './components/form/AddTime.vue';
import ClockCounter from './components/clock/ClockCounter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: ClockCounter
        },
        {
            path: '/add',
            component: AddTime
        },
        {
            path: '/countdowners',
            component: ClockCounter
        }
    ],
})
const app = createApp(App)
app.use(router)
app.mount('#app')