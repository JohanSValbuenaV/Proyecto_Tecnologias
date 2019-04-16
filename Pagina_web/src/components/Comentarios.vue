<template>
  <div class="container-fluid">
    <h2>DENUNCIAS</h2>
<div class="column col-lg-6 m-auto">
 <div class="nombre col-lg-12">
      <label for="nombre">Nombre</label>
      <input id="nombre" v-model="comentario.nombre" placeholder="nombre" type="text">
    </div>

    <div class="comentario col-lg-12">
      <label for="Denuncia">Denuncia</label>
      <textarea id="comentario" v-model="comentario.comenta" placeholder="Denuncia"></textarea>
    </div>
</div>
   
    <button class="btn btn-primary" @click="Enviar">Enviar Denuncia</button>

<div class="container-fluid">
   <table class="table table-dark table-striped table-hover table-bordered">
      <thead>
        <tr class="d-flex">
          <th class="col-2">Nombre</th>
          <th class="col-10">Denuncia</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in  loadedC" :key="index" class="d-flex">
          <td class="col-2">{{item.nombre}}</td>
          <td class="col-10">{{item.comenta}}</td>
        </tr>
      </tbody>
    </table>
    </div>
   

  </div>

  
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "Comentarios",

  computed: {
    ...mapGetters(["comentario", "loadedC"])
  },
  methods: {
    Enviar() {
      console.log(this.comentario.nombre);
      this.$store.dispatch("agregarComentario");
      let obj = {
        nombre: this.comentario.nombre,
        comenta: this.comentario.comenta
      };
      this.$store.commit("loadComentario", obj);
      this.comentario.nombre = " ";
      this.comentario.comenta = " ";
    }
  },
  created: function() {
    this.$store.dispatch("loadComentarios");
  }
};
</script>


<style scoped>


.table{

 text-align: left;
}

input {
  width: 100%;
}

.btn{
  margin: 1rem;
}

textarea {
  width: 100%;
  height: 100px;

}
</style>