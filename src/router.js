import Vue from 'vue'
import Router from 'vue-router'
import PartOne from './components/PartOne.vue'
import PartTwo from './components/PartTwo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'partone',
      component: PartOne
    },
    {
      path: '/parttwo',
      name: 'parttwo',
      component: PartTwo
    }
  ]
})
