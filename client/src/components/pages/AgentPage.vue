<template lang="pug">
  <div class="container-fluid">
    <div class="row">
     
      <div class="col-lg-12 col-xs-12 text-left" >
        <b class="col-lg-12 col-xs-12 text-secondary"> Название компании </b>
        <h4 class="col-lg-12 col-xs-12 " style="margin-bottom: 20px"> <b> {{agent.name}} </b></h4>
        <b class="col-lg-12 col-xs-12 text-secondary"> Описание </b>
        <label class="col-lg-12 col-xs-12" > {{agent.description}} </label>
        
        section.panel.panel-success( v-if="reviews.length" )
            table.table
                tr 
                    th Рейтинг
                    th Орфрейтинг
                    th Спаркрейтинг
                tr
                    td {{agent.rating}}
                    td {{agent.orfrating}}
                    td {{agent.sparkrating}}
        
        <b class="col-lg-12 col-xs-12 text-secondary"> Отзывы </b>
        
        div( v-for="(review, index) in reviews", :key="review._id" )
            div.card.col-lg-12
                div.card-body
                    h5.card-title {{ review.reviewer }} 
                    div.card-subtitle  <b class=" text-secondary">Рейтинг: {{ review.rating }}  Вес: {{ review.rating }} </b>
                    div.card-text <b>Отзыв:</b> {{ review.message}}
            
      </div>
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
        /* this.posts = response.data */
      },
      async getReview(id) {
        const response = await AgentService.getAgentReview()
        response.data.forEach(element => {
            if (id == element.agent_id){this.reviews.push(element)}
        });
      }
    },
    mounted () {
        this.id = this.$router.history.current.params.id
        this.getInfo(this.id)
        this.getReview(this.id)
    }
  }
</script>