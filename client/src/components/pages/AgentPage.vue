<template lang="pug">
  <div class="container-fluid">
    <div class="row">
     
      <div class="col-lg-12 col-xs-12" >
        <h3 class="col-lg-12 col-xs-12"> Список контрагентов </h3>
        section.panel.panel-success( v-if="posts.length" )
          .panel-heading
          <table class="table table-striped">
            tr
              th Название 
              th Описание
              th Рейтинг
              th Орфрейтинг
              th Спаркрейтинг
            tr( v-for="(post, index) in posts", :key="post.title" )
              td <router-link :to="{ path: 'agent/'+post._id, params: { id: post._id }}"> {{ post.name }}</router-link>
              td {{ post.description  }}
              td {{ post.rating }}
              td {{ post.orfrating }}
              td {{ parseInt(post.sparkrating) }}
          </table>
        section.panel.panel-danger( v-else-if="posts.length" )
          p
            | There are no posts ... Lets add one now!
          div
            router-link( :to="{ name: 'NewPost' }" )
              | add new post
      </div>
    </div>
  </div>
</template>

<script>
  import AgentsService from '@/services/AgentsService'
  export default {
    name: 'AgentPage',
    data () {
      return {
        posts: []
      }
    },
    methods: {
      async getList () {
        const response = await AgentsService.getAgents()
        console.log(response.data)
        this.posts = response.data
      }
    },
    mounted () {
      this.getList()
    }
  }
</script>