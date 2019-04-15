<template>
  <div>
    <h2>COMENTARIOS Prueba</h2>
    <p>
      <label for="nombre">nombre</label>
      <input id="nombre" v-model="comentario.nombre" placeholder="nombre" type="text">
    </p>

    <p>
      <label for="comentario/denuncia">COMENTARIO/DENUNCIA</label>
      <textarea id="comentario" v-model="comentario.comenta" placeholder="Comentario o denuncia"></textarea>
    </p>
    <button @click="Enviar"> enviar comentario</button>
     


<ul v-for="(item, index) in  loadedC" :key="index">
    <li>
{{item.nombre}} - {{item.comenta}}
    </li>
</ul>


  </div>
</template>

<script>
import { mapState,mapMutations, mapGetters } from "vuex";




export default {
  name: "Comentarios",
 

  computed: {
    ...mapGetters(['comentario','loadedC'])
  }
,
  methods: {
     
      Enviar(){
        console.log( this.comentario.nombre);
          this.$store.dispatch('agregarComentario')
let obj = {nombre: this.comentario.nombre,
comenta: this.comentario.comenta }
          this.$store.commit('loadComentario',obj);
          
          this.comentario.nombre= ' ';
          this.comentario.comenta = ' ';
      }
  },
  created: function(){
   this.$store.dispatch('loadComentarios');
  }
};
</script>


<style scoped>
p {
  display: flex;
  flex-direction: column;
}

input {
  width: 500px;
  margin: auto;
}

textarea {
  width: 500px;
  height: 100px;
  margin: auto;
}
</style>