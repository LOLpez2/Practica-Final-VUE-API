import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CharacterList from '../views/CharacterList.vue';
import CharacterDetail from '../views/CharacterDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/characters',
    name: 'CharacterList',
    component: CharacterList,
  },
  {
    path: '/characters/:id',
    name: 'CharacterDetail',
    component: CharacterDetail,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
