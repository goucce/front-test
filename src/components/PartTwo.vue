<template>
  <div class="part">
    <div id="wrapper" class ="table">
     <thead>
        <tr  id="resultado">         
        </tr>

     </thead>
     <tbody>
        <tr id="resultadoTimeTable">
          
        </tr>

     </tbody>
     
    </div> 
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

        console.log({datos});
        
    //Primer bucle donde tenemos 14 resltados, haciendo referencia al if
    for (let i = 0; i < datos.length; i++) {
      const element = datos[i];
      if (datos[i].timetableType === "LOGISTICS" ) {
              datosTimeTable.push(datos[i]);
       }      
      
    };   
    //Console log que que corresponde con lo esperado.
    console.log('Filtro con LOGISTICS :');    
    console.log( {datosTimeTable});

    

      
 var resultado = datosTimeTable.map( (dataValue) => {     
   // console.log({dataValue});      
     dataValue.defaultTimetableTimeSlotConfigurations = dataValue.defaultTimetableTimeSlotConfigurations.filter((pedidos) => {
         return pedidos.visitTypeCode == "PICKUP"       
        
      }  )
    return dataValue
   }  );
  
  console.log({resultado});

  

  var resFormat = resultado.map( dataFormat => {
    return {

     dayOfWeek: dataFormat.dayOfWeek,
     timeSlotCodes: dataFormat.defaultTimetableTimeSlotConfigurations.map(val => val.timeSlotCode )
 
    }

  })

  console.log({resFormat});   


  var resFinal = resFormat.map( dataFinal => {

        //Title

        var node = document.createElement('th')   
        
   
          
         node.appendChild(document.createTextNode(dataFinal.dayOfWeek))
         node.getAttribute("scope","col")
        
        document.getElementById('resultado').appendChild( node )  

        //  TimeTAble

        var dataTimeTable = dataFinal.timeSlotCodes;        
        
        var dataTimeTableOrdenado = dataTimeTable.sort((a,b)=> parseInt(a.split(':')[0])-parseInt(b.split(':')[0]) )
        console.log(dataTimeTableOrdenado);

        var nodeTimeTable = document.createElement('td')

        for (let i = 0; i < dataTimeTableOrdenado.length; i++) {
         var nodeInter = document.createElement('span')
          nodeInter.appendChild(document.createTextNode(dataTimeTableOrdenado[i]))
          nodeTimeTable.appendChild(nodeInter)
          
        }
        

        //  nodeTimeTable.classList.add("col-1")
          nodeTimeTable.getAttribute("scope","col")
        
        document.getElementById('resultadoTimeTable').appendChild( nodeTimeTable )     


  } )


    
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

<style>
.titulo{
  padding-left: 2vh;
  padding-right: 2vh;
  display: flex;
  justify-content: center;
}
 #resultadoTimeTable {
  
  font-size: 1.6vh!important;
  width:  2vh;
  
}
.container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  
}
.wrapper{
  width:75%;
}

#resultadoTimeTable span{
    width: 94px;
    display: inline-block;
}

</style>
