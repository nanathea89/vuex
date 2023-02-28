<template>
  
    <div class="col-6 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            Daftar Agenda
          </h3>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover table-bordered">
              <thead>
              <tr>
                <td>#</td>
                <td>Hari</td>
                <td>Agenda</td>
                <td></td>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(row,index) in listAgenda" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ row.hari }}</td>
                  <td>{{ row.kegiatan }}</td>
                  <td><button class="btn btn-sm btn-danger" @click="removeAgenda(index)">X</button></td>
                </tr>
              </tbody>


            </table>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()
const listAgenda = computed(()=> store.state.listAgenda)
// const agendaSenin = computed(()=> store.getters.getSenin)
const removeAgenda = (val)=> {
  console.log(val)
  store.commit('deleteAgenda',val)
}

const agendaSenin = ()=> store.getters.getSenin
const agendaAll = () => listAgenda
</script>

<style lang="scss" scoped>

</style>