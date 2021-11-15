import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resultTimes: {},
  },
  mutations: {
    infoWeather(state, result) {
      state.resultTimes = result;
    },
  },
  actions: {
    getTimes: async function (context, buscar) {
      console.log(buscar)
      const getTimes = async () => {
        let url = 'https://api.tvmaze.com/shows';
        const response = await fetch(url);
        const result = response.json(); 

        return result;
        
      }


      getTimes().then((result) => {

        console.log("result")
        
        if(buscar == ""){
          context.commit('infoWeather', result);
        }else {

          const filtered = result.filter(function(elem){
            return elem.id == buscar ;
          });
        if(!filtered[0]){
          console.log("no existi")
          context.commit('infoWeather', filtered);
        }
        if(filtered[0]){
          console.log("sii")
          context.commit('infoWeather', filtered);
        }
      }

      })
    },
  },

})
