<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="row" style="background-color: #EE1A3B; margin-bottom: 10px">
      <h1 class="col-lg-4 col-xs-12" style="border-left: none"> Кейс №5 </h1>
      <h1 class="col-lg-4 col-xs-12"> DeepRock </h1>
      <div class="col-lg-4 col-xs-12" style="background-color:white; align: left">
        <img  src="./assets/logo.png" style="height: 70px; width: 220px; margin-top: 10px">
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
h1 {
  font-size: 44pt;
  font-weight: bold;
  color:white;
  border-left: 5px solid white;
  margin-top: 10px;
  margin-bottom: 10px;
  /* position: absolute; */
  /* top: 10px; */
  /* bottom: 10px; */

}
</style>
