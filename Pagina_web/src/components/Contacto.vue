<template>
    <div class="container">   
<h2>Formulario de contacto</h2>

<form action="https://formspree.io/corrupcionSimulmedios@gmail.com" method="POST">
<div class="form-row">   
    <input type="hidden" name="_subject" value="New submission!" />

<div class="form-group col-md-6">   
     <label for="inputnombre">Nombre</label>
 <input type="text" class="form-control" placeholder="Nombre" name="name" required>
</div>
 <div class="form-group col-md-6">
     <label for="inputemail">Email</label>
 <input type="email" class="form-control" placeholder="Ejemplo@gmail.com" name="email" required>
 </div>
 <div class="form-group col-md-6">
     <label for="inputTelfono">Telefono</label>
 <input type="number" class="form-control" placeholder="Telefono" name="telefono" required>
 </div>
 <div class="form-group col-md-6">
     <label for="inputemail">Ciudad</label>
 <input type="text" class="form-control" placeholder="Ciudad" name="ciudad" required>
 </div>
  </div>
 <div class="form-group">
      <label for="inputemail">Mensaje</label>
 <textarea type="text" class="form-control mensaje" placeholder="Mensaje" name="messsage" required ></textarea>
 </div>
 <div>
  <button class="btn btn-primary" type="submit" value="send">Enviar</button>
 </div>

  
</form>


</div>

   
</template>

<script>
export default {
    name:'Contacto'
}
</script>

<style scoped>
    .mensaje{
        height: 100px;
    }
</style>