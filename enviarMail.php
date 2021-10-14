<?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contacto = $_POST['telefono']
$contenido = $_POST['mensaje'];

$header = 'From: '.$correo.'';
$header .= 'X-Mailer: PHP/'. phpversion() .'';
$header .= 'Mime-Version: 1.0 ';
$header .= 'Content-Type: text/plain';

$mensaje = 'Enviado por' .$nombre.', \r\n';
$mensaje .='Mensaje: '. $contenido .'\r\n';
$mensaje .= 'Numero de contacto'.$contacto.'\r\n';
$mensaje .='enviado el '. date('d/m/Y',time());

$para='colocar email de la empresa';
$asunto=$_POST['Servicio'];

mail($para,$asunto,utf8_decode($contenido),$header);

header("Location:Agradecimiento.html")
?>