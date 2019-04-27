<template>
  <div class="container-fluid m">
    <div class="primeraSeccion d-flex flex-wrap justify-content-between pt-5 pb-5">
      <div class="contenedor col-lg-2 justify-content-between">
        <img class="imga col-12" src="../assets/Capa 8.png" alt>
      </div>

      <div class="textos col-lg-7">
        <h2>
          <span class="cambiocolor">La Corrupción</span> es un problema de todos.
          <br>
          <span class="bajar">La mejor forma de combatirla es denunciandola.</span>
        </h2>
        <p>Te invitamos a denunciar en esta sección cualquier acto de corrupción que hayas presenciado para que así todos podamos tener conocimiento del mismo y nos adyudemos a evitar este tipo de actos</p>
      </div>

      <div class="contenedor col-lg-2 justify-content-between">
        <img class="imga col-12" src="../assets/Capa 7.png" alt>
      </div>
    </div>
    <div class="coontenedornegro pb-5 pt-5 d-flex flex-wrap">
      <div class="d-flex flex-wrap col-lg-6 col-sm-12">
        <p class="tituloforma col-12">
          Denuncia
          <span>aquí</span>
        </p>
        <img class="col-6 m-1 mb-5" src="../assets/barra.png" alt="barra">
        <div class="column col-12">
          <div class="nombre col-lg-12 m-2">
            <input
              class="form-control"
              id="nombre"
              v-model="comentario.nombre"
              placeholder="nombre"
              type="text"
              required
            >
          </div>

          <div class="comentario col-lg-12 m-2">
            <textarea
              class="form-control"
              id="comentario"
              v-model="comentario.comenta"
              placeholder="Tu Denuncia aqui ..."
              required
            ></textarea>
          </div>
        </div>

       
      </div>
       <div class="column col-lg-6 m-auto">
          <div>
 <img src="../assets/mensa.png" alt="globos">
          </div>
         <div>
 <button class="btn" @click="Enviar">Denunciar</button>
         </div>
         
        </div>
    </div>
    
    <div class="comtenarios p-5">
      <ul   v-for="(item, index) in  loadedC" :key="index" class="d-flex">
          <li class="d-flex col-12 flex-wrap justify-content-around p-3 align-items-center"> <span class="nombrelista col-lg-12">{{item.nombre}}</span><br><span class="comenlista col-lg-8">{{item.comenta}}</span> <img class="avatar" src="../assets/avatarang.png" alt="ang"> </li>
      </ul>




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
      this.comentario.nombre = "";
      this.comentario.comenta = "";
    }
  },
  created: function() {
    this.$store.dispatch("loadComentarios");
  }
};
</script>


<style scoped>
h2,
p {
  color: white;
  text-shadow: 2px 2px #000000;
}
.imga{
  padding: 0%;
}
.comtenarios ul{
  list-style: none;
}
.contenedor{
  padding: 0%;
}
.comtenarios li{
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
}
.nombrelista{
  color: #3bb7d1;
  font-size: 3rem;
  text-align: left;
}
.comenlista{
  color: white;
  font-size: 1.875rem;
}

.avatar{
  width: 118px;
  height: 118px;
}
.container-fluid {
  padding: 0%;
}

.tituloforma {
  font-size: 3.75rem;
  text-align: left;
}

.tituloforma span {
  color: #44deff;
}

.btn{
  background-color: #44deff;
  font-size: 3.75rem;
}

h2 {
  font-size: 3rem;
  text-align: center;
}
.coontenedornegro {
  background-color: #1b1b1b;
  background-size: cover;
}

.textos p {
  margin-top: 50px;
  font-size: 1.875rem;
}

.textos {
  margin-top: 15px;
}
.container-fluid {
  background-image: url(../assets/Dip2.jpg);
  font-family: "Franklin Gothic Medium";
}

.table {
  text-align: left;
}
.cambiocolor {
  color: #ffc652;
}

input {
  width: 100%;
}
input[type="text"] {
  border: 2px solid#44deff;
  border-radius: 10px;
  background-color: #1b1b1b;
  color: white;
}

input[type="text"]::placeholder {
  color: #3bb7d1;
}

.btn {
  margin: 1rem;
}
textarea::placeholder {
  color: #3bb7d1;
}
textarea:focus {
  background-color: #1b1b1b;
  color: white;
}
.bajar {
  font-size: 1.875rem;
}
textarea {
  color: white;
  width: 100%;
  height: 100px;
  resize: none;
  border: 2px solid#44deff;
  border-radius: 10px;
  background-color: #1b1b1b;
}
</style>