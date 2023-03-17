import { createRouter, createWebHashHistory } from 'vue-router'

import AboutVue from '@/views/About.vue'
import AlbumsVue from '@/views/Albums.vue'
import AlbumVue from '@/views/Album.vue'
import NotFound from '@/views/404.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', component: AboutVue },
      { path: '/albums', component: AlbumsVue },
      { path: '/albums/:albumName', component: AlbumVue },
      { path: '/:pathMatch(.*)*', component: NotFound },
    ]
})