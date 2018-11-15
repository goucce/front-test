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
      <p><strong>Token: </strong></p>
      <textarea rows=8 style="width: 100%">eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqdWFuZGllZ29AbXJqZWZmYXBwLmNvbSIsInJvbGVzIjpbIlJPTEVfQkFDS09GRklDRSJdLCJuYW1lIjoiSnVhbiBEaWVnbyIsImlzcyI6ImJhY2tvZmZpY2UubXJqZWZmYXBwLm5ldCIsImlkIjoiOGM3OWI3NjctNWJjZS00Y2NmLTk1NmUtMDZmMWJmOWJkMTkwIiwiZnVsbG5hbWUiOiJKdWFuIERpZWdvIC4iLCJ0eXBlIjoidXNlciIsImV4cCI6MTU0MDE5MDc0NCwiaWF0IjoxNTM5NTg1OTQ0LCJqdGkiOiIxMTU1YjRlOC1lMzI2LTRhM2QtOWI0Mi1mZDU0MTYxYzVlOWMiLCJlbWFpbCI6Imp1YW5kaWVnb0BtcmplZmZhcHAuY29tIn0.edbZq_FoscsNVRAxx__iAtNwahQld1UNw120ZHm8_lolWDqgwGuAore4OVlli-MCuO2MwD_xk5jy9P4QdzpAWg
      </textarea>
      <!-- <p><strong>Token: </strong><code>eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqdWFuZGllZ29AbXJqZWZmYXBwLmNvbSIsInJvbGVzIjpbIlJPTEVfQkFDS09GRklDRSJdLCJuYW1lIjoiSnVhbiBEaWVnbyIsImlzcyI6ImJhY2tvZmZpY2UubXJqZWZmYXBwLm5ldCIsImlkIjoiOGM3OWI3NjctNWJjZS00Y2NmLTk1NmUtMDZmMWJmOWJkMTkwIiwiZnVsbG5hbWUiOiJKdWFuIERpZWdvIC4iLCJ0eXBlIjoidXNlciIsImV4cCI6MTU0MDE5MDc0NCwiaWF0IjoxNTM5NTg1OTQ0LCJqdGkiOiIxMTU1YjRlOC1lMzI2LTRhM2QtOWI0Mi1mZDU0MTYxYzVlOWMiLCJlbWFpbCI6Imp1YW5kaWVnb0BtcmplZmZhcHAuY29tIn0.edbZq_FoscsNVRAxx__iAtNwahQld1UNw120ZHm8_lolWDqgwGuAore4OVlli-MCuO2MwD_xk5jy9P4QdzpAWg</code></p> -->
      <button @click="request" class="request-button">Hacer Llamada</button>
    </div>

    <hr>
    
    <div class="exercise">
      <h1>Ejercicio 4</h1>
      <p>Con los datos obtenidos en la anterior llamada, extrae los dias que tengan como <code>timetableType: "LOGISTICS"</code> y los horarios que tengan como <code>visitTypeCode: "PICKUP"</code> y conviertelos al siguiente formato:</p>
      <pre class="code">
[
  {
  dayOfWeek: 'MONDAY',
  timeSlotCodes:
    [
      '10:00-11:00',
      '11:00-12:00',
      '12:00-13:00',
    ]
  },
  {...},
  {...},
  {...}
]
      </pre>
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
const AuthStr = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqdWFuZGllZ29AbXJqZWZmYXBwLmNvbSIsInJvbGVzIjpbIlJPTEVfQkFDS09GRklDRSJdLCJuYW1lIjoiSnVhbiBEaWVnbyIsImlzcyI6ImJhY2tvZmZpY2UubXJqZWZmYXBwLm5ldCIsImlkIjoiOGM3OWI3NjctNWJjZS00Y2NmLTk1NmUtMDZmMWJmOWJkMTkwIiwiZnVsbG5hbWUiOiJKdWFuIERpZWdvIC4iLCJ0eXBlIjoidXNlciIsImV4cCI6MTU0MjkwMzU4NiwiaWF0IjoxNTQyMjk4Nzg2LCJqdGkiOiJmMGE4OWYwOS03OTE4LTQ1N2UtYmEzNC01MTBhMTJmZDAyMDAiLCJlbWFpbCI6Imp1YW5kaWVnb0BtcmplZmZhcHAuY29tIn0.MQWwYP8xDGoG57QMJajjaFzU3mKIS3FU5Mgl35njl8NBDXmkW0IMZNdXH6FhbYfmlxmVy_AkrsML9XrTry5FIg '; 
var URL = 'https://pre.backoffice.v1.backend.mrjeffapp.net/timetable-service/v1/defaultTimetableConfigurations';
var ES = 'ES';
var LOGISTICS = 'LOGISTICS';


export default {
  name: 'PartTwo',
  
  
  methods: {
    request () {      
      axios.get(URL, {

    headers: { Authorization: AuthStr},
    params: {
      // timetableType: 'LOGISTICS',
      countryCode: 'ES',
          
    },
  })
  .then(function (response) { 
        var datos = response.data;
        var datosTimeTable = [];
        var datosTotales = [];
        var datosIntermedio=[];

    //Primer bucle donde tenemos 14 resltados, haciendo referencia al if
    for (let i = 0; i < datos.length; i++) {
      const element = datos[i];
      if (datos[i].timetableType === "LOGISTICS" ) {
              datosTimeTable.push(datos[i]);
       }      
      
    };   
    //Console log que que corresponde con lo esperado.
    console.log('Filtro con LOGISTICS :');    
    console.log( datosTimeTable);

    //Segundo bucle donde recorremos las dos condiciones, donde en teoria me tendrían que salir menos resultados.
    //(No he hecho esto en el aterior bucle porque tras realizar la condición única me esperaba un resultado en el que se me redugera el número de resultado)
    
    
    // //////////////////////////////////////////// ERROR


  var copydata = datosTimeTable.slice(0);
  console.log(copydata);
  

    for (let i = 0; i < datosTimeTable.length; i++) {          
      var contador=copydata[i].defaultTimetableTimeSlotConfigurations.length
        for (let j = 0; j < contador; j++) {
          if ( copydata[i].defaultTimetableTimeSlotConfigurations[j].visitTypeCode === "PICKUP" ) {
             
             
             datosIntermedio.push(datosTimeTable[i].defaultTimetableTimeSlotConfigurations[j]);

              
              
            //  console.log(datosTimeTable[i]);
            // datosTotales.slice(0,8, datosTimeTable[i] )

        

                  
        } 
        
        datosTimeTable[i].defaultTimetableTimeSlotConfigurations.length=0;
       
      
       datosTimeTable[i].defaultTimetableTimeSlotConfigurations.push(datosIntermedio);

       }
       
      
       console.log(datosTimeTable[i].defaultTimetableTimeSlotConfigurations);
       datosIntermedio.length=0;

  
      
    }
  

    console.log('Filtro con LOGISTICS y PICKUP :');  
    console.log(datosTimeTable);
    
    // //////////////////////////////////////////// ERROR



    
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

    },
  },

  data () {
    return {
      timetable: [],
      datos:{},

      
    }
  },
}
</script>

<style scoped>
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
</style>