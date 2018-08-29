
import List from '@/components/pages/AgentsList'
import Agent from '@/components/pages/AgentPage'

const routes = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/agent/:id',
    name: 'Agent',
    component: Agent
  }
]

export default routes