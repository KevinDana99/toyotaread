const convertDate = (day) => {

    let newDay = new Date(day);

    let fecha = newDay.toLocaleDateString().split('/');
    
  let mes =  fecha[1] < 10 ? `0${fecha[1]}` : `${fecha[1]}`;
  let date =  `${fecha[2]}/`+ mes + `/${fecha[0]}`;
  
  return date;
  
  }

  export {convertDate};
  