<?php
$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$tema = $_POST['tema'];
$mensaje = $_POST['mensaje'];
$cuerpoMail = "Nombre ".$nombre."\r\n"."correo ".$correo."\r\n"."tema ".$tema."\r\n"."mensaje ".$mensaje;

mail("escubifull@gmail.com", "consulta enviada desde el portfolio", $cuerpoMail);
header("Location: index.php#contacto?ok")
?>

