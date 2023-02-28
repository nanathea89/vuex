<template>
 <div class="col-md-6">
  <form class=" p-3" @submit.prevent="addData">
  <input type="text" v-model="dataForm.hari" placeholder="Hari" class="form-control">
  <input type="text" v-model="dataForm.kegiatan" placeholder="Kegiatan" class="form-control">
  <button type="submit" class="btn btn-info">Submit</button>
  </form>
 </div>
</template>

<script setup>
import {reactive, computed } from "vue";
import { useStore } from "vuex";

const store = useStore()
const dataForm = reactive({
  hari: "",
  kegiatan: ""
})

const addData = ()=>{
  store.commit('addAgenda',{...dataForm})
  dataForm.hari=""
  dataForm.kegiatan=""
}



</script>

<style lang="scss" scoped>

</style>