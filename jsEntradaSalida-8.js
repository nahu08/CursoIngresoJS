/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numerodividendo= document.getElementById("sueldo").value;
 	var numerodivisor= document.getElementById("numeroDivisor").value;

 	dividendo=parseInt(numerodividendo);
 	divisor=parseInt(numerodivisor);

 	var resultado= dividendo%divisor;
 	
 	alert(resultado);
}
