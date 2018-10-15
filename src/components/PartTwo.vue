<template>
  <div class="part">
    <hr>
    <div class="exercise">
      <h1>Ejercicio 3</h1>
      <p>
        Implementa una llamada HTTP con la librería <code>Axios</code> para llamar a un servicio de la API de MrJeff
        <a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">( Documentación de Axios )</a>
        Haz uso del botón de abajo para que realize la llamada al clickar.
      </p>
      <p>
        <strong>URL: </strong>
        <code>
          https://dev.backoffice.v1.backend.mrjeffapp.net/timetable-service/v1/defaultTimetableConfigurations
        </code>
      </p>
      <p><strong>Params: </strong><code>countryCode: ES</code></p>
      <p><strong>Token: </strong><code>token....</code></p>
      <button @click="request" class="request-button">Hacer Llamada</button>
    </div>

    <hr>
    
    <div class="exercise">
      <h1>Ejercicio 4</h1>
      <p>Con los datos obtenidos en la anterior llamada, extrae los dias que tengan como <code>timetableType: "LOGISTICS"</code> y los horarios que tengan como <code>visitTypeCode: "PICKUP"</code> y conviertelos al siguiente formato:</p>
      <div class="code">
        [
        <br>
        &nbsp;&nbsp;&nbsp;{
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dayOfWeek: 'MONDAY',
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeSlotCodes:
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'10:00-11:00',
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'11:00-12:00',
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'12:00-13:00',
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
        <br>
        &nbsp;&nbsp;&nbsp;},
        <br>
        &nbsp;&nbsp;&nbsp;{...},
        <br>
        &nbsp;&nbsp;&nbsp;{...},
        <br>
        &nbsp;&nbsp;&nbsp;{...}
        <br>
        ]
      </div>
    </div>
    
    <hr>
    
    <div class="exercise">
      <h1>Ejercicio 5</h1>
      <p>Una vez tenemos los datos formateados, tenemos que mostrarlos por pantalla con el siguiente formato:</p>
      <img src="@/assets/timetable.png">
    </div>

    <hr>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PartTwo',
  
  methods: {
    request () {
      // TODO: Request to the API
    }
  },

  data () {
    return {
      timetable: []
    }
  },
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
.request-button {
  font-size: 2rem;
  background-color: transparent;
  border-radius: 4px;
  padding: .5rem 1rem;
  transition: all .2s;
}
.request-button:hover {
  background-color: rgb(225, 225, 225);
  transform: translateY(-4px) 
}
.code {
  text-align: left;
  font-family: monospace;
  background-color: rgb(225, 225, 225);
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem auto;
  width: fit-content;
}
</style>