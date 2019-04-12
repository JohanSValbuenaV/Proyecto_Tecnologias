<template>
  <div>
    <h2>COMENTARIOS Prueba</h2>
    <p>
      <label for="nombre">nombre</label>
      <input id="nombre" v-model="nombre" placeholder="nombre" type="text">
    </p>

    <p>
      <label for="comentario/denuncia">COMENTARIO/DENUNCIA</label>
      <textarea id="comentario" v-model="comenta" placeholder="Comentario o denuncia"></textarea>
    </p>
    <button @click="Enviar"> enviar comentario</button>
     


<ul v-for="(item, index) in comentario" :key="index">
    <li>
{{item.nombre}} -- {{item.comenta}}
    </li>
</ul>


  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";

export default {
  name: "Comentarios",
  data() {
    return {
      nombre: null,
      comenta: null
    };
  },
  computed: {
    ...mapState(["comentario"])
  },
  methods: {
      ...mapMutations(['agregarComentario']),
      Enviar(){
          let comento = {
              nombre: this.nombre,
              comenta: this.comenta
          } 
         this.$store.commit('agregarComentario',comento)
         this.nombre = null
        this.comenta = null
      }
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