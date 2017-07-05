/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	var numUno= document.getElementById("PrecioUno").value;
 	var numDos= document.getElementById("PrecioDos").value;
 	var numTres= document.getElementById("PrecioTres").value;


 	numUno=parseInt(numUno);
 	numDos=parseInt(numDos);
 	numTres=parseInt(numTres);

 	var resultado=numUno+numDos+numTres

 	alert(resultado);


	
}
function Promedio () 
{






	
	
}
function PrecioFinal () 
{

	var numUno= document.getElementById("PrecioUno").value;
 	var numDos= document.getElementById("PrecioDos").value;
 	var numTres= document.getElementById("PrecioTres").value;


 	numUno=parseInt(numUno);
 	numDos=parseInt(numDos);
 	numTres=parseInt(numTres);

 	var resultado=numUno+numDos+numTres*1.21

 	alert(resultado);










}