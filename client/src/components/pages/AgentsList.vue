<template lang="pug">
  <div class="container-fluid">
    <div class="row">
     
      <div class="col-lg-12 col-xs-12" >
        <h3 class="col-lg-12 col-xs-12"> Список контрагентов </h3>
        section.panel.panel-success( v-if="posts.length" )
          .panel-heading
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Фильтр</span>
            </div>
            <input type="text" class="form-control " v-model="fName" placeholder="Название компании" aria-label="Название компании" aria-describedby="basic-addon1">
            <input class="form-control col-lg-1" type="number" v-model="fRate" placeholder="Рейтинг" id="replyNumber" min="0" max="5"step="1" data-bind="value:replyNumber" />
            <select class="custom-select col-lg-3" v-model="fCate" aria-label="Example select with button addon">
              <option selected>Категория</option>
              <option value="Строительные компании">Строительные компании</option>
              <option value="Питание">Питание</option>
              <option value="Консалтинговые услуги">Консалтинговые услуги</option>
            </select>
            <div class="input-group-append ">
              <button v-on:click="sendFilter()" class="btn btn-outline-secondary" type="button">Применить</button>
            </div>
          </div>
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
    name: 'AgentsListPage',
    data () {
      return {
        posts: [],
        fName: '',
        fCate: '',
        fRate: 0
      }
    },
    methods: {
      async getList () {
        const response = await AgentsService.getAgents()
        console.log(response.data)
        this.posts = response.data
      },
      async sendFilter () {
        
        const response = await AgentsService.getFilteredAgents(this.fName, this.fCate, this.fRate)
        console.log(response)
        /* this.posts = response.data */
      }
    },
    mounted () {
      this.getList()
    }
  }
</script>