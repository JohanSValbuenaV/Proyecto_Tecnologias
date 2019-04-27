<template>
  <div class="container-fluid m-0 p-0">
    <div class="seccionazu d-flex flex-wrap-reverse">
      <p class="m-5 text-left">
        Si estas interesado en nuestros servicios web o deseas mas información acerca de como puedes
        <br>denunciar un caso de corrupción no dudes en contactarnos.
        <br>
        <span>Te responderemos tan pronto como podamos.</span>
      </p>

      <img class="m-auto mb-5 pb-5" src="../assets/contact.png" alt="contacto">
    </div>

    <div class="segundasec d-flex flex-wrap pb-5">
      <div class="formulario col-lg-8 col-sm-12 px-5">
        <h2 class="text-left my-3 col-lg-12">Contáctanos</h2>
        <form action="https://formspree.io/corrupcionSimulmedios@gmail.com" method="POST">
          <div class="form-row">
            <input type="hidden" name="_subject" value="New submission!">

            <div class="form-group col-md-6">
              <input type="text" class="form-control" placeholder="Nombre" name="name" required>
            </div>
            <div class="form-group col-md-6">
              <input
                type="email"
                class="form-control"
                placeholder="Correo electronico"
                name="email"
                required
              >
            </div>
            <div class="form-group col-md-6">
              <input
                type="number"
                class="form-control"
                placeholder="Telefono"
                name="telefono"
                required
              >
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control" placeholder="Ciudad" name="ciudad" required>
            </div>
          </div>
          <div class="form-group">
            <textarea
              type="text"
              class="form-control mensaje"
              placeholder="Tu Denuncia aqui ..."
              name="messsage"
              required
            ></textarea>
          </div>
         
        </form>
      </div>
       <div class="col-lg-4 col-sm-12 d-flex align-items-end">
            <button class="btn col-lg-6 col-sm-12" type="submit" value="send">Enviar</button>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacto"
};
</script>

<style scoped>
.seccionazu {
  width: 100%;
  background-image: url(../assets/Dip2.jpg);
  background-size: cover;
}

.segundasec {
  background-color: #1b1b1b;
}

p {
  color: rgb(255, 255, 255);
  font-size: 1.875rem;
  text-shadow: 2px 2px #000000;
}

h2 {
  font-size: 3.75rem;
  color: white;
}
.mensaje {
  height: 100px;
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

input[type="email"] {
  border: 2px solid#44deff;
  border-radius: 10px;
  background-color: #1b1b1b;
  color: white;
}

input[type="email"]::placeholder {
  color: #3bb7d1;
}
input[type="number"] {
  border: 2px solid#44deff;
  border-radius: 10px;
  background-color: #1b1b1b;
  color: white;
}

input[type="number"]::placeholder {
  color: #3bb7d1;
}

textarea::placeholder {
  color: #3bb7d1;
}
textarea:focus {
  background-color: #1b1b1b;
  color: white;
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
.btn{
  background-color: #44deff;
  font-size: 3.75rem;
}
</style>