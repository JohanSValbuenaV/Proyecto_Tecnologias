<template>
  <div id="app">
    <div id="nav">
      <Daheader></Daheader>
      
      
    </div>
    <router-view/>
    <DaFooter></DaFooter>
  </div>
</template>

<script>
import Daheader from "@/components/DaHeader.vue";
import DaFooter from "@/components/DaFooter.vue";
export default {
  name: "app",
  components: {
    Daheader,
    DaFooter
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
