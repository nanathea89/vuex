<template>
  
    <div class=" col-6 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">List Agenda</h3>
        </div>
        <div class="card-body">
          <ul>
            <li v-for="(row, index) in agenda" :key="index">
              <strong>{{ row.hari }}</strong> - {{ row.kegiatan }}

            </li>
          </ul>
        </div>
      </div>
    </div>
 
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()
const agenda = computed(()=> store.state.listAgenda)

</script>

<style lang="scss" scoped>

</style>