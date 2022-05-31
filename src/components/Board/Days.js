let output_week = [];

//Establece la fecha actual

const date = new Date();

//Establece el numero de dia de semana

const actualDay = date.getDay();

//Funciones para sumar y restar Dias

const sumaDias = (dia,suma) => {

const dat = new Date(dia);

dat.setDate(dat.getDate() + suma);

return dat;

}


const restaDias = (dia,resta) => {

const dat = new Date(dia);

  dat.setDate(dat.getDate() - resta);

  return dat;
  

}

//Establece el dia inicial por el cual se van a efectuar los calculos de otros dias

const getInitDay = () => {

let initDay;

if (actualDay == 0) {

initDay = sumaDias(date,1)

}else if (actualDay == 1) {

initDay = sumaDias(date,0)

}else if (actualDay == 2) {

initDay = restaDias(date,1)

}else if (actualDay == 3) {

initDay = restaDias(date,2)

}else if (actualDay == 4) {

initDay = restaDias(date,3)

}else if (actualDay == 5) {

initDay = restaDias(date,4)

}else if (actualDay == 6) {

initDay = restaDias(date,5)

}

return initDay;


}

const getDaysWeek = () => {

const days = {

lunes : getInitDay(),
martes : sumaDias(getInitDay(),1),
miercoles : sumaDias(getInitDay(),2),
jueves : sumaDias(getInitDay(),3),
viernes : sumaDias(getInitDay(),4), 
sabado : sumaDias(getInitDay(),5)

}

return days;

}


const getWeeks = () => {

const array_dias = [];

const valores = Object.values(getDaysWeek());


for (let i=0;i<valores.length;i++){

  array_dias.push(valores[i]);

}

return array_dias;

}


const getWeekNext = () => {

  let dias;

if (output_week.length == 0){

  dias = getWeeks();

}else{

dias = output_week;
output_week = []

}


dias.map(e=> {

output_week.push(sumaDias(e,7))

})

return output_week;

}

const getWeekBack = () => {


  let dias;

if (output_week.length == 0){

  dias = getWeeks();

}else{

dias = output_week;
output_week = []

}


dias.map(e=> {

output_week.push(restaDias(e,7))

})

return output_week;

}

const getMes = (mes) => {

  if (mes == 1){

    mes = 'Enero';
    
    }else if(mes == 2){
    
    mes = 'Febrero'
    
    }else if(mes == 3){
    
      mes = 'Marzo'
      
      }else if(mes == 4){
    
        mes = 'Abril'
        
        }else if(mes == 5){
    
          mes = 'Mayo'
          
          }else if(mes == 6){
    
            mes = 'Junio'
            
            }else if(mes == 7){
    
              mes = 'Julio'
              
              }else if(mes == 8){
    
                mes = 'Agosto'
                
                }else if(mes == 9){
    
                  mes = 'Septiembre'
                  
                  }else if(mes == 10){
    
                    mes = 'Octubre'
                    
                    }else if(mes == 11){
    
                      mes = 'Noviembre'
                      
                      }else if(mes == 12){
    
                        mes = 'Diciembre'
                        
                        }
            
          
        return mes;
      

}

const array_parse = (array) => {

let mes = getMes(new Date(array[3]).getMonth()+1);
let año = new Date(array[3]).getFullYear();


const output = {

mes : `${mes} (${año})`,  
lunes : array[0],
martes : array[1],
miercoles : array[2],
jueves : array[3],
viernes : array[4],
sabado : array[5]

}

return output;
}

export {date,getInitDay,sumaDias,restaDias,getDaysWeek,getWeeks,getWeekNext,getWeekBack,array_parse,getMes}