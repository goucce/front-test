<template>
  <div class="part">
    <Checkout :steps="steps" :currentStep="currentStep" v-on:last="lastStep" v-on:next="nextStep" ></Checkout>


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
    <div class="exercise">
      <h1>Ejercicio 3</h1>
      <p>Modifica el componente Checkout para que permita moverte entre los pasos por los que hayas pasado.</p>
      <p>Casos:</p>
      <ul>
        <li>
          <p>Si estás en el paso 1, no te permite clickar sobre ninguno de los pasos siguientes.</p>
        </li>
        <li>
          <p>Si estás en el paso 3, te permite clickar sobre los pasos 1 y 2 pero no sobre los siguientes.</p>
        </li>
      </ul>
    </div>
    <hr>
    <div class="exercise">
      <h1>Ejercicio 4 - CSS</h1>
      <p>Cambia la posición de los títulos de cada paso. Posiciónalos arriba del paso en lugar de abajo.</p>
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
      url: '../assets/stepper.mov',
      steps:[
        1,
        2,
        3,
        4,
        5
      ],
      currentStep: 0,
    }
  },
  methods:{                 
      
        lastStep: function(){       
          
        this.currentStep--
      }  
      ,
        nextStep: function() {
        
          
        this.currentStep++
        },
    }
}

</script>
