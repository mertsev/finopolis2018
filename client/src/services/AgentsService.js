import api from '@/services/api'
import querystring from 'querystring';


export default {
  getAgents () {
    
    return api().get('agents')
  },
  getFilteredAgents(fName, fCate, fRate) {
    alert( ''+fName + fCate + fRate)
    return api().post('agents', querystring.stringify({  name: fName,
        description: fCate,
        orf: fRate,
        spark: fRate 
                    
            }), {
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
            }
            }).then(function(response) {
                console.log(response);
            }
    )
  }
}