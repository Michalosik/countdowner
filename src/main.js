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
    faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import BaseCounter from './components/UI/BaseCounter.vue';
import BaseButton from './components/UI/BaseButton.vue';
import TheCountdowners from './components/counters/TheCountdowners.vue';
import AddCountdowner from './components/counters/AddCountdowner.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: TheCountdowners
        },
        {
            path: '/add',
            component: AddCountdowner
        },
        {
            path: '/countdowners',
            component: TheCountdowners
        }
    ],
})
library.add(faTrashAlt, faPlusCircle)
const app = createApp(App)
app.component('base-counter', BaseCounter)
app.component('base-button', BaseButton)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')