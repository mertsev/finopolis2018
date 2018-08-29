import api from '@/services/api'
import querystring from 'querystring';


export default {
  getAgentInfo (id) {

    return api().get('agents/'+id)
  },
  getAgentReview (id) {
    const response = api().get('review')
    response.data.forEach((element) => {
        console.log(element);
    });
  },
}