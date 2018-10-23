import Vue from 'vue'
import Router from 'vue-router'
import Show from '@/components/Show'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Rank from '@/components/Rank'
import Hot from '@/components/Hot'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Show',
      component: Show
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'rank',
          component:Rank
        },
        {
          path:'hot',
          component:Hot
        },
        {
          path:'search',
          component:Search
        },
        {
          path: 'detail',
          name: 'Detail',
          component: Detail
        }
      ]
    }
  ]
})
