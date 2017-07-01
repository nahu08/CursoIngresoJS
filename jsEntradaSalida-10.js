/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe= document.getElementById("importe").value;
 	var resultado= document.getElementById("resultado").value;

 	importe=parseInt(importe);
 	resultado=parseInt(resultado);

 	var resultado= importe/1.25;
 	
 	alert(resultado);
	
}
