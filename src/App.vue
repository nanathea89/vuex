<template>
 <div id="app" class="container">
  <div class="row py-4">
    <AgendaForm/>
    <AgendaInput/>
    <AgendaShow/>
  </div>
 </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AgendaInput from './components/AgendaInput.vue'
import AgendaShow from './components/AgendaShow.vue'
import AgendaForm from './components/AgendaForm.vue'

export default {
  name: 'App',
  components: {
    AgendaInput,
    AgendaShow,
    AgendaForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
