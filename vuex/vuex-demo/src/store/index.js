import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            {id: 100, name: "Sean"},
            {id: 101, name: "Demo"}
        ]
    },
    mutations: {
        add(state) {
            state.counter++;
        },
        delete(state) {
            state.counter--;
        }
    },
    actions: {},
    getters: {
        powerAdd(state) {
            return state.counter * state.counter
        },
        filterId(state) {
          return   state.students.filter(s => {
                return s.id > 100
            })
        },
        filterName(state){
            return function (name){
               return  state.students.filter(s=>{
                   return  s.name===name;
                })
            }

        }
    },
    modules: {}

})
