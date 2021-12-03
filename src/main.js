import {
    createApp
} from 'vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'
import {
    library
} from '@fortawesome/fontawesome-svg-core';
import {
    faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import BaseCounter from './components/UI/BaseCounter.vue';
import CountersList from './components/counters/CountersList.vue';
import AddCounter from './components/counters/AddCounter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: CountersList
        },
        {
            path: '/add',
            component: AddCounter
        },
        {
            path: '/countdowners',
            component: CountersList
        }
    ],
})
library.add(faTrashAlt)
const app = createApp(App)
app.component('base-counter', BaseCounter)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')