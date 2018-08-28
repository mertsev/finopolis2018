import api from '@/services/api'

export default {
  getAgents () {
    return api().get('agents')
  }
}