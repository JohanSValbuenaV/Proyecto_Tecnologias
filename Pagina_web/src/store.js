import Vue from "vue";
import Vuex from "vuex";
import firebase from "./configfire";

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    _isTrue: true,
    _comentario: {
      nombre: " ",
      comenta: " "
    },
    _loadedC:[]
    

  },
  getters: {
    isTrue: function(state) {
      return state._isTrue;
    },

    comentario: function(state) {
      return state._comentario;
    },
    loadedC: function(state){
      return state._loadedC;
    }
  },
  
  mutations: {
    toggle: function(state, bool) {
      state._isTrue = bool;
    },
    agregarComentario(state) {
      state._comentario;
    },
    loadComentario: function(state,playload){
      state._loadedC.push(playload);
    },
    setloadComentario: function(state,payload){
      state._loadedC =payload;
    }
   
  },
  actions: {
    toggle: function(context) {
      let temp = !context.state._isTrue;
      firebase.database.ref("settings/setting").set(temp);
    },
    agregarComentario: function(context) {
      let com = context.state._comentario;
      firebase.database.ref("BaseComentarios").push(com);
    },
    // obtener datos
    getFirebaseDataBase: function(context) {
      firebase.database.ref("settings/setting").on("value", function(snapshot) {
        context.commit("toggle", snapshot.val());
      });
    },
    loadComentarios: function(context){
      firebase.database.ref('BaseComentarios').once('value')
      .then((data)=>{
        const comentarios = []
        const obj = data.val()
        for (let key in obj){
          comentarios.push({
            nombre: obj[key].nombre,
            comenta: obj[key].comenta
          })
        }
        context.commit('setloadComentario',comentarios)
      })
      .catch(
        (error)=>{
          console.log(error)
        }
      )
     
    }
  }
});
