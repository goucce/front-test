<template>
  <div class="part">
    <Checkout/>
    <hr>
    <div class="exercise">
      <h1>Ejercicio 1</h1>
      <p>Tenemos el componente <code>&lt;Checkout></code> insertado en nuestra aplicación.</p>
      <p>Este componente nos permite visualizar cuantos pasos hay y en cual estamos en un formulario por pasos.</p>
      <p>El componente está insertado en el archivo <code>App.vue</code> pero hay un fallo y no funciona.</p>
      <p>Detecta el fallo para que se visualice como en la imagen de abajo.</p>
      <img src="@/assets/stepper.png" alt="" srcset="">
    </div>
    <hr>
    <div class="exercise">
      <h1>Ejercicio 2</h1>
      <p>Una vez funcionando, necesitamos movernos a través de cada paso.</p>
      <p>Modifica el componente para que podamos ir a los siguientes pasos clicando en los botones.</p>
      <p>Recuerda que no deben permitir a un paso que no esté dentro del rango (p. ej. Menos de 1 o mayor de 5)</p>
      <img src="@/assets/stepper.gif" alt="" srcset="">
    </div>
    <hr>
  </div>
</template>

<script>
import Checkout from '@/components/Checkout.vue'
export default {
  name: 'PartOne',
  components: {
    Checkout
  },
  data () {
    return {
      url: '../assets/stepper.mov'
    }
  }
}
</script>

<style>
.part {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 75vw;
}
p {
  width: 100%;
  text-align: left;
  margin: .5rem 0;
}
img {
  width: 100%;
  border: 1px solid black;
  margin-top: 1rem;
}
code {
  padding: .2rem 1rem;
  background-color: rgb(225, 225, 225);
  border-radius: 4px;

}
</style>