import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'

Vue.use(Vuex)
Vue.use(firebase)

export default new Vuex.Store({
  state: {
    _isTrue: true,
    comentario: [{nombre:'johan', comenta: 'prueba de comentarios'},{nombre:'julian',comenta: 'es que nadie piensa en los niños :C' }]
  },
  getters: {
    isTrue: function (state){
      return state._isTrue;
    }
  }
  ,
  mutations: {
    toggle: function(state, bool){
      state._isTrue=bool;
    },
   agregarComentario(state,obj){
    state.comentario.push(obj)
   }
  },
  actions: {
    toggle: function(context){
      let temp = !context.state._isTrue;
      firebase.database.ref('settings/setting').set(temp);
    },
getFirebaseDataBase: function (context) {
  firebase.database.ref('settings/setting').on('value', function(snapshot) {
    context.commit('toggle',snapshot.val());
  })
}
  }
})
