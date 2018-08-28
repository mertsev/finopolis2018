import Start from '@/components/pages/StartPage'
import Posts from '@/components/pages/PostsPage'
import Hello from '@/components/HelloWorld'
import List from '@/components/pages/AgentsList'
import Agent from '@/components/pages/AgentPage'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
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