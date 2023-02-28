import { createStore } from 'vuex'

export default createStore({
  state: {
    listAgenda: [
      {
        hari: "Senin",
        kegiatan: "Belajar Vue"
      },
      {
        hari: "Selasa",
        kegiatan: "Belajar Laravel"
      },
      {
        hari: "Rabu",
        kegiatan: "Belajar Angular"
      },
    ]
  },
  getters: {
    getSenin(state){
      return state.listAgenda.filter((val)=> val.hari == 'Senin')
    }
  },
  mutations: {
    addAgenda(state, payload){
      state.listAgenda.push(payload)
    },

    updateAgenda(state,payload){
      let idx = state.listAgenda.indexOf(payload.hari)
      state.listAgenda[idx].hari = payload.hari
      state.listAgenda[idx].kegiatan = payload.kegiatan
    },

    deleteAgenda(state,payload){
      // let idx = state.listAgenda.indexOf(payload.hari)
      state.listAgenda.splice(payload,1)
    }

  },
  actions: {
  },
  modules: {
  }
})
