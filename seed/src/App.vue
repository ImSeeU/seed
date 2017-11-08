<template>
  <div id="app">
    <img src="./assets/logo.png">
   <!-- <router-view/> -->
    <HelloWorld></HelloWorld>
    <EmailForm></EmailForm>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


import HelloWorld from './components/HelloWorld.vue'
import EmailForm from './components/EmailForm.vue'

Vue.use(BootstrapVue);


export default {
  components:{
    'HelloWorld': HelloWorld,
    'EmailForm': EmailForm
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
