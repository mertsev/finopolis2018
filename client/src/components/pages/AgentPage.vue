<template lang="pug">
  <div class="container-fluid">
    <div class="row text-left" style="margin: 0px 50px 0px 50px">
     
    
        <h5><b class="col-lg-12 col-xs-12 text-secondary"> Название компании </b></h5>
        <h3 class="col-lg-11 col-xs-11 " style="margin-bottom: 10px"> <b> {{agent.name}} </b></h3>
        <button v-on:click="routeHome()" class="col-lg-1 btn btn-outline-secondary" type="button" >К списку</button>
        <h5 class="col-lg-12 col-xs-12 text-secondary"> Описание </h5>
        <label class="col-lg-12 col-xs-12" > {{agent.description}} </label>
        
        section.panel.panel-success.col-lg-8( v-if="reviews.length" )
            table.table
                tr 
                    th Рейтинг
                    th Орфрейтинг
                    th Спаркрейтинг
                tr
                    td {{agent.rating}}
                    td {{agent.orfrating}}
                    td {{agent.sparkrating}}
        
        <h5 class="col-lg-12 col-xs-12 text-secondary"> Отзывы </h5>
        
        div.col-lg-12( v-for="(review, index) in reviews", :key="review._id" )
            div.card
                div.card-body
                    h5.card-title {{ review.reviewer }} 
                    div.card-subtitle  <b class=" text-secondary">Рейтинг: {{ review.rating }}  Вес: {{ review.rating }} </b>
                    div.card-text <b>Отзыв:</b> {{ review.message}}
            

    </div>
  </div>
</template>

<script>
  import AgentService from '@/services/AgentService'
  export default {
    name: 'AgentPage',
    data () {
      return {
        reviews: [],
        agent: []
      }
    },
    methods: {
      async getInfo(id) {
        const response = await AgentService.getAgentInfo(id)
        this.agent = response.data
      },
      async getReview(id) {
        const response = await AgentService.getAgentReview()
        response.data.forEach(element => {
            if (id == element.agent_id){this.reviews.push(element)}
        });
      },
      routeHome() {
        this.$router.push('/')
      }
    },
    mounted () {
        this.id = this.$router.history.current.params.id
        this.getInfo(this.id)
        this.getReview(this.id)
    }
  }
</script>