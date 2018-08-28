import api from '@/services/api'

export default {
  fetchAgents () {
    return api().get('agents')
  }
}