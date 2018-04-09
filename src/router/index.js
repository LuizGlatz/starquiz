import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/pages/Game'
import List from '@/pages/List'
import Start from '@/pages/Start'
import Ranking from '@/pages/Ranking'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Início',
      component: Start
    },
    {
      path: '/jogando/:page',
      component: Game,
      children: [
        {
          path: '',
          name: 'Em jogo',
          component: List,
          props: true
        }
      ]
    },
    {
      path: '/jogando',
      redirect: '/jogando/1'
    },
    {
      path: '/classificacao',
      name: 'Classificação',
      component: Ranking
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name + ' | StarQuiz'

  next()
})

export default router
