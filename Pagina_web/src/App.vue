<template>
  <div id="app">
    <div v-if="isTrue" id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/comentarios">Comentarios</router-link>|
      <router-link to="/contactenos">Contactenos</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <button @click="toggleMe">toggle me</button>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    isTrue: function() {
      return this.$store.getters.isTrue;
    }
  },
  methods: {
    toggleMe: function (){
      this.$store.dispatch('toggle');
    }
  },
  created: function(){
    this.$store.dispatch('getFirebaseDataBase')
  
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
