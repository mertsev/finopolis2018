import api from '@/services/api'
import querystring from 'querystring';


export default {
  getAgentInfo (id) {

    return api().get('agents/'+id)
  },
  getAgentReview () {
    const response = api().get('reviews')
    return response 
    /* response.data.forEach(element => {
        console.log(element);
    }); */
  },
}