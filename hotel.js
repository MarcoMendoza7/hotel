const FRMHOTEL = document.querySelector("#frmHotel")
//crear un evento clic con un Listener 
FRMHOTEL.addEventListener("submit", calcularHospedaje)
function calcularHospedaje(evt){
  evt.preventDefault(); //no se actualize la pagina (No envia datos)
  //recibir los datos del formulario
  let diasHosp = document.querySelector("#txtDiasHosp").value;
  let precioPorDia = document.querySelector("#txtPrecioDiario").value;
  let tipoPago = document.querySelector("#cmbTipoPago").value;


  let imprimir =document.getElementById("resultado");
  imprimir.textContent=hotelTDA(diasHosp,precioPorDia,tipoPago);
}


//crear TDA para calcular el total a pagar del hotel
/*
function hotelTDA(){

}*/

//datos los represento como parametros de entrada 
const hotelTDA=(diasHosp,precioPorDia,tipoPago)=>{

  let descuento = 0;
  let total;
  //Calculando el total
  let subtotal = diasHosp * precioPorDia; 
  //validamos descuento en funcion de los dias
   if(diasHosp > 5 && diasHosp <= 10){
    descuento = subtotal * 0.1;
  }else if (diasHosp > 10 && diasHosp <= 15){
    descuento = subtotal * 0.15;
  }else if (diasHosp > 15){
   descuento = subtotal * 0.2;
  }
  total = subtotal - descuento;
  //imprimiendo resultado
  if(tipoPago == "tarjeta"){
   total= total + (total * 1.03)
  }

  return `subtotal a pagar $${subtotal} Descuento $${descuento} total $${total} Tipo de pago :${tipoPago} `;

}
