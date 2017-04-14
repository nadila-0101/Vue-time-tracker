// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/time-entries',
    component: TimeEntries
  }, {
    path: '/Home',
    component: Home
  }]
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  ...App
})

