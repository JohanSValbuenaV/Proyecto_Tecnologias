import Vue from "vue";
import Vuex from "vuex";

import {
  dbMSG
} from './configfire';


import {
  db
} from './Firebase';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    _isTrue: true,
    _comentario: {
      nombre: "",
      comenta: ""
    },
    _loadedC:[],
    CurrentSlideShowItem: 1,
    MenuItems: [{
        name: "Inicio",
        Special: false,
        Init: true,
        type:"init",
      },
      {
        name: "Denuncia aquí",
        Special: true,
        Init: false,
        type:1,
      },
      {
        name: "Sobre nosotros",
        Special: false,
        Init: false,
        type:0,
      },
      {
        name: "Contáctanos",
        Special: false,
        Init: false,
        type:2,
      },

    ],
    ArrowGrayHover: require("./assets/ArrowGrayHover.png"),
    ArrowGrayHoverBackwards: require("./assets/ArrowGrayHoverBackwards.png"),



    DefAlone: "",

    
    JustTop: "",  //100
    ColombiaCurrentRanking: "", //96
    ColombiaCurrentPoints: "",  //37
    JustYear: "", //2018

    IndiceCorrupcionPaises2018: [],
    ItemCorrupcion: {
      Puesto: "",
      Pais: "",
      Puntaje: "",
      Dark: false,
    },


    InfoEstadistica: [],
    ItemEstadistica: {
      HighlightedInfo: "",
      NormalInfo: "",
      Bibliography: "",     
      color: "",
       open: false,
    },

    

    ItemsDeCorrupcion: [],
    ItemSoloDeCorrupcion:{
      Definition: "",
    },
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
    },
    
    //Slide1 Items (Definition)

    DefAlone: function (state) {
      return state.DefAlone;
    },

    //Slide2 Items

    //table 

    IndiceCorrupcionPaises2018: function (state) {
      return state.IndiceCorrupcionPaises2018;
    },

    // Punctual info

    ColombiaCurrentRanking: function (state) {
      return state.ColombiaCurrentRanking;
    },

    ColombiaCurrentPoints: function (state) {
      return state.ColombiaCurrentPoints;
    },

    JustTop: function (state) {
      return state.JustTop;
    },

    JustYear: function (state) {
      return state.JustYear;
    },


    // Slide3 Items    

    InfoEstadistica: function (state) {
      return state.InfoEstadistica;
    },

    //Slide4 Items



    ItemsDeCorrupcion: function (state) {
      return state.ItemsDeCorrupcion;
    },
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
     
    },
    setCurrentSlideShowTo7: (state) => {
      state.CurrentSlideShowItem = 7;
    },

    reduceCurrentSlideShowItem: (state) => {
      state.CurrentSlideShowItem -= 1;
    },

    IncreaseCurrentSlideShowItem: (state) => {
      state.CurrentSlideShowItem += 1;
    },


    //Slide1 Items (Definition)

    setLoadDefAlone: function (state, paylaod) {
      state.DefAlone = paylaod;
    },



    //Slide2 Items

    // TABLE

    setLoadItemsSlide2: function (state, paylaod) {
      state.IndiceCorrupcionPaises2018 = paylaod;
    },

    // Punctual data

    setLoadColombiaCurrentPoints: function (state, paylaod) {
      state.ColombiaCurrentPoints = paylaod;
    },

    setLoadColombiaCurrentRanking: function (state, paylaod) {
      state.ColombiaCurrentRanking = paylaod;
    },

    setLoadJustTop: function (state, paylaod) {
      state.JustTop = paylaod;
    },

    setLoadJustYears: function (state, paylaod) {
      state.JustYear = paylaod;
    },


    //Slide3 Items

    
    setLoadItemsSlide3: function (state, paylaod) {
      state.InfoEstadistica = paylaod;
    },

    //Slide4 Items

    setLoadItemsSlide4: function (state, paylaod) {
      state.ItemsDeCorrupcion = paylaod;
    }
   
  },
  actions: {
    toggle: function(context) {
      let temp = !context.state._isTrue;
      dbMSG.ref("settings/setting").set(temp);
    },
    agregarComentario: function(context) {
      let com = context.state._comentario;
      dbMSG.ref("BaseComentarios").push(com);
    },
    // obtener datos
    getFirebaseDataBase: function(context) {
      dbMSG.ref("settings/setting").on("value", function(snapshot) {
        context.commit("toggle", snapshot.val());
      });
    },
    loadComentarios: function(context){
      dbMSG.ref('BaseComentarios').once('value')
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
     
    },
    SetAboutUs: (context) => {
      context.commit('setCurrentSlideShowTo7');
    },

    ReduceSlide: (context) => {
      context.commit('reduceCurrentSlideShowItem');
    },

    IncreaseSlide: (context) => {
      context.commit('IncreaseCurrentSlideShowItem');
    },

    //Slide1 Items (Definition)

    LoadDefAlone: function (context) {
      db.ref('DefinicionSola').once('value').then((data) => {
        const obj = data.val()
        context.commit('setLoadDefAlone', obj)
      })
    },


    //Slide2 Items

    //table

    LoadItemsSlide2: function (context) {
      db.ref('IndiceCorrupcionPaises2018').once('value').then((data) => {
        const ITEMS = []
        const obj = data.val()
        for (let key in obj) {
          ITEMS.push({
            Puesto: obj[key].Puesto,
            Puntaje: obj[key].Puntaje,
            Pais: obj[key].Pais,
            Dark: obj[key].Dark
          })
        }
        context.commit('setLoadItemsSlide2', ITEMS)
      })
    },

    //punctual data

    LoadColombiaCurrentPoints: function (context) {
      db.ref('Items2IndiceCorrupcion/ColombiaCurrentPoints').once('value').then((data) => {
        const obj = data.val()
        context.commit('setLoadColombiaCurrentPoints', obj)
      })
    },

    LoadColombiaCurrentRanking: function (context) {
      db.ref('Items2IndiceCorrupcion/ColombiaCurrentRanking').once('value').then((data) => {
        const obj = data.val()
        context.commit('setLoadColombiaCurrentRanking', obj)
      })
    },

    LoadJustTop: function (context) {
      db.ref('Items2IndiceCorrupcion/JustTop').once('value').then((data) => {
        const obj = data.val()
        context.commit('setLoadJustTop', obj)
      })
    },

    LoadJustYears: function (context) {
      db.ref('Items2IndiceCorrupcion/JustYears').once('value').then((data) => {
        const obj = data.val()
        context.commit('setLoadJustYears', obj)
      })
    },

    //Slide3 Items

    LoadItemsSlide3: function (context) {
      db.ref('InfoEstadistica').once('value').then((data) => {
        const ITEMS = []
        const obj = data.val()
        for (let key in obj) {
          ITEMS.push({
            HighlightedInfo: obj[key].HighlightedInfo,
            NormalInfo: obj[key].NormalInfo,
            Bibliography: obj[key].Bibliography,           
            color: obj[key].color,
            open: obj[key].open,          
          })
        }
        context.commit('setLoadItemsSlide3', ITEMS)
      })
    },

    //Slide4 Items

    LoadItemsSlide4: function (context) {
      db.ref('ItemsDeCorrupcion').once('value').then((data) => {
        const ITEMS = []
        const obj = data.val()
        for (let key in obj) {
          ITEMS.push({
            Definition: obj[key].Definition,
          })
        }
        context.commit('setLoadItemsSlide4', ITEMS)
      })
    }
  }
});
